import { Grid, FormControlLabel, RadioGroup, Radio } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";

import "./step.css";

const Step3 = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section className="step_main">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <label htmlFor="healthDeclaration" className="input_label">
            Health Declaration
          </label>
          <Controller
            name="healthDeclaration"
            control={control}
            render={({ field }) => (
              <RadioGroup {...field} className="radio_container">
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            )}
          />
          {errors.healthDeclaration && (
            <span className="error_message">
              {errors.healthDeclaration.message}
            </span>
          )}
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <label htmlFor="step3-name2" className="input_label">
            Emergency Contact Information
          </label>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <label htmlFor="egInfoName" className="input_label">
            Name
          </label>
          <input id="egInfoName" {...register("egInfoName")} />
          {errors.egInfoName && (
            <span className="error_message">{errors.egInfoName.message}</span>
          )}
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <label htmlFor="egInfoEmail" className="input_label">
            Email
          </label>
          <input id="egInfoEmail" {...register("egInfoEmail")} />
          {errors.egInfoEmail && (
            <span className="error_message">{errors.egInfoEmail.message}</span>
          )}
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <label htmlFor="egInfoPhone" className="input_label">
            Phone
          </label>
          <Controller
            name="egInfoPhone"
            control={control}
            render={({ field }) => (
              <PhoneInput
                {...field}
                defaultCountry="BD"
                placeholder="Enter phone number"
              />
            )}
          />
          {errors.egInfoPhone && (
            <span className="error_message">{errors.egInfoPhone.message}</span>
          )}
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <label htmlFor="medicalConditions" className="input_label">
            Any Medical Conditions (if applicable)
          </label>
          <input id="medicalConditions" {...register("medicalConditions")} />
          {errors.medicalConditions && (
            <span className="error_message_last">
              {errors.medicalConditions.message}
            </span>
          )}
        </Grid>
      </Grid>
    </section>
  );
};

export default Step3;
