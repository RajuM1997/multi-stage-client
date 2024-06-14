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
import { addSuccessfully } from "../../utils/Alert";

const AllStep = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const methods = useForm({
    mode: "onChange",
    resolver: zodResolver(
      step === 1 ? step1Schema : step === 2 ? step2Schema : step3Schema
    ),
    defaultValues: formData,
  });

  useEffect(() => {
    methods.reset(formData);
  }, [formData, step, methods]);

  const handleNext = useCallback(async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      setFormData((prev) => ({ ...prev, ...methods.getValues() }));
      setStep((prev) => prev + 1);
    }
  }, [methods]);

  const handlePrevious = useCallback(() => {
    if (step > 1) {
      setFormData((prev) => ({ ...prev, ...methods.getValues() }));
      setStep((prev) => prev - 1);
    }
  }, [step, methods]);

  const onSubmit = async (data) => {
    const combinedData = { ...formData, ...data };
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/mars-applicant`,
        combinedData
      );
      if (res.status === 201) {
        addSuccessfully("Added successfully");
        methods.reset();
        setFormData({});
        setStep(1);
      }
    } catch (error) {
      console.log(error);
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
                    <button type="submit" className="next_btn">
                      Submit
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
