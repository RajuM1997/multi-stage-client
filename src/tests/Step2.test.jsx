import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FormProvider, useForm } from "react-hook-form";
import Step2 from "../components/Step/Step2";

const Wrapper = ({ children }) => {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe("Step2 Component", () => {
  // step2 components
  test("renders the component correctly", () => {
    render(<Step2 />, { wrapper: Wrapper });
    expect(
      screen.getByLabelText(/Accommodation Preference/i)
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Special Requests or Preferences")
    ).toBeInTheDocument();
  });
});
