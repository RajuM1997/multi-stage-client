import React from "react";
import { Grid } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "./step.css";
import CustomDatePicker from "../DatePicker/CustomDatePicker";

const Step1 = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section className="step_main">
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={12}>
          <label htmlFor="name" className="input_label">
            Full Name
          </label>
          <input id="name" {...register("name")} autoComplete="off" />
          {errors?.name && (
            <span className="error_message">{errors?.name?.message}</span>
          )}
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <label htmlFor="dateOfBirth" className="input_label">
            Date of Birth
          </label>
          <Controller
            name="dateOfBirth"
            control={control}
            render={({ field }) => (
              <CustomDatePicker
                label="Date of Birth"
                {...field}
                onChange={field.onChange}
                value={field.value}
              />
            )}
          />
          {errors?.dateOfBirth && (
            <span className="error_message">
              {errors?.dateOfBirth?.message}
            </span>
          )}
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <label htmlFor="nationality" className="input_label">
            Nationality
          </label>
          <input
            id="nationality"
            {...register("nationality")}
            autoComplete="off"
          />
          {errors?.nationality && (
            <span className="error_message">
              {errors?.nationality?.message}
            </span>
          )}
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <label htmlFor="email" className="input_label">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            autoComplete="off"
          />
          {errors?.email && (
            <span className="error_message">{errors?.email?.message}</span>
          )}
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <label htmlFor="phone" className="input_label">
            Phone Number
          </label>
          <Controller
            name="phone"
            control={control}
            rules={{ required: "Phone number is required" }}
            render={({ field }) => (
              <PhoneInput
                id="phone"
                {...field}
                defaultCountry="BD"
                placeholder="Enter phone number"
                className="phone_input"
              />
            )}
          />
          {errors?.phone && (
            <span className="error_message_last">{errors?.phone?.message}</span>
          )}
        </Grid>
      </Grid>
    </section>
  );
};

export default Step1;
