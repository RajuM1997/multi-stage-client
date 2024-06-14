import React from "react";
import { Container } from "@mui/material";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { useCallback, useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "./step.css";
import Step1 from "./Step1";
import { step1Schema, step2Schema, step3Schema } from "../../schema/formSchema";
import axios from "axios";
import { addSuccessfully, toastError } from "../../utils/Alert";
import CircularProgress from "@mui/material/CircularProgress";

const AllStep = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formDataStep1, setFormDataStep1] = useState({});
  const [formDataStep2, setFormDataStep2] = useState({});
  const [formDataStep3, setFormDataStep3] = useState({});

  const currentSchema =
    step === 1 ? step1Schema : step === 2 ? step2Schema : step3Schema;

  const methods = useForm({
    mode: "onBlur",
    resolver: zodResolver(currentSchema),
    defaultValues:
      step === 1 ? formDataStep1 : step === 2 ? formDataStep2 : formDataStep3,
  });

  useEffect(() => {
    switch (step) {
      case 1:
        methods.reset(formDataStep1);
        break;
      case 2:
        methods.reset(formDataStep2);
        break;
      case 3:
        methods.reset(formDataStep3);
        break;
      default:
        break;
    }
  }, [step, formDataStep1, formDataStep2, formDataStep3, methods]);

  const handleNext = useCallback(async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      switch (step) {
        case 1:
          setFormDataStep1(methods.getValues());
          break;
        case 2:
          setFormDataStep2(methods.getValues());
          break;
        case 3:
          setFormDataStep3(methods.getValues());
          break;
        default:
          break;
      }
      setStep((prevStep) => prevStep + 1);
    }
  }, [methods, step]);

  const handlePrevious = useCallback(() => {
    if (step > 1) {
      switch (step) {
        case 2:
          setFormDataStep2(methods.getValues());
          break;
        case 3:
          setFormDataStep3(methods.getValues());
          break;
        default:
          break;
      }
      setStep((prevStep) => prevStep - 1);
    }
  }, [methods, step]);

  const onSubmit = async (data) => {
    setLoading(true);
    const combinedData = {
      ...formDataStep1,
      ...formDataStep2,
      ...formDataStep3,
      ...data,
    };
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/mars-applicant`,
        combinedData
      );
      if (res.status === 201) {
        addSuccessfully("Your application has been submitted");
        methods.reset();
        setFormDataStep1({});
        setFormDataStep2({});
        setFormDataStep3({});
        setStep(1);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toastError("Something went wrong, please try again.");
    }
  };

  return (
    <section className="all_step_container">
      <Container>
        <div className="form_wrap">
          <div className="form_container">
            <h1>Explore Mars</h1>
            <div className="progress">
              <div>
                <h6
                  className={
                    step === 1 ? "active_progress" : "inactive_progress"
                  }
                >
                  Personal Information
                </h6>
              </div>
              <div>
                <h6
                  className={
                    step === 2 ? "active_progress" : "inactive_progress"
                  }
                >
                  Travel Preferences
                </h6>
              </div>
              <div>
                <h6
                  className={
                    step === 3 ? "active_progress" : "inactive_progress"
                  }
                >
                  Health and Safety
                </h6>
              </div>
            </div>
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="form_main"
              >
                {step === 1 && <Step1 />}
                {step === 2 && <Step2 />}
                {step === 3 && <Step3 />}
                <div
                  className={
                    step === 1 ? "btn_container_init" : "btn_container"
                  }
                >
                  {step > 1 && (
                    <button
                      type="button"
                      className="previous_btn"
                      onClick={handlePrevious}
                    >
                      Previous
                    </button>
                  )}
                  {step < 3 && (
                    <button
                      type="button"
                      className="next_btn"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  )}
                  {step === 3 && (
                    <button
                      type="submit"
                      className="next_btn"
                      disabled={loading ? true : false}
                    >
                      {!loading ? (
                        "Submit"
                      ) : (
                        <CircularProgress
                          sx={{ width: "25px", height: "25px" }}
                        />
                      )}
                    </button>
                  )}
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AllStep;
