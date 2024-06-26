import React from "react";
import { Grid } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import "./step.css";
import DatePicker from "react-date-picker";

const Step2 = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section className="step_main">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <label htmlFor="departureDate" className="input_label">
            Departure Date
          </label>
          <Controller
            name="departureDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                label="Departure Date"
                {...field}
                onChange={field.onChange}
                value={field.value}
              />
            )}
          />
          {errors.departureDate && (
            <span className="error_message">
              {errors.departureDate.message}
            </span>
          )}
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <label htmlFor="returnDate" className="input_label">
            Return Date
          </label>
          <Controller
            name="returnDate"
            id="returnDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                onChange={field.onChange}
                value={field.value}
                id="returnDate"
              />
            )}
          />
          {errors.returnDate && (
            <span className="error_message">{errors.returnDate.message}</span>
          )}
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <label htmlFor="accommodationPreference" className="input_label">
            Accommodation Preference
          </label>
          <select
            id="accommodationPreference"
            {...register("accommodationPreference")}
            defaultValue=""
            data-testid="accommodationPreference"
          >
            <option value="" disabled>
              Please Select
            </option>
            <option value="space hotel">Space Hotel</option>
            <option value="martian base">Martian Base</option>
          </select>
          {errors.accommodationPreference && (
            <span className="error_message">
              {errors.accommodationPreference.message}
            </span>
          )}
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <label htmlFor="specialRequestsOrPreferences" className="input_label">
            Special Requests or Preferences
          </label>
          <input
            id="specialRequestsOrPreferences"
            {...register("preferences")}
            autoComplete="off"
            data-testid="specialRequestsOrPreferences"
          />
          {errors.preferences && (
            <span className="error_message_last">
              {errors.preferences.message}
            </span>
          )}
        </Grid>
      </Grid>
    </section>
  );
};

export default Step2;
