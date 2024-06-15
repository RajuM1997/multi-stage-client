import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FormProvider, useForm } from "react-hook-form";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import AllStep from "./AllStep";

const Wrapper = ({ children }) => {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe("Step1 Component", () => {
  //all step components
  // test("renders the component correctly", () => {
  //   render(<AllStep />);
  //   expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
  //   expect(screen.getByLabelText("Nationality")).toBeInTheDocument();
  //   expect(screen.getByLabelText("Email")).toBeInTheDocument();
  //   expect(screen.getByLabelText("Phone Number")).toBeInTheDocument();
  // });

  //all step1 components
  test("renders the component correctly", () => {
    render(<Step1 />, { wrapper: Wrapper });
    expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Nationality")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone Number")).toBeInTheDocument();
  });

  //all step2 components
  test("renders the component correctly", () => {
    render(<Step2 />, { wrapper: Wrapper });
    expect(
      screen.getByLabelText(/Accommodation Preference/i)
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Special Requests or Preferences")
    ).toBeInTheDocument();
  });

  //all step3 components
  test("renders the component correctly", () => {
    render(<Step3 />, { wrapper: Wrapper });
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText("Any Medical Conditions (if applicable)")
    ).toBeInTheDocument();
  });
});
