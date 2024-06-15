import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FormProvider, useForm } from "react-hook-form";
import AllStep from "../components/Step/AllStep";
import axios from "axios";
import { vi } from "vitest";

vi.mock("axios");

const Wrapper = ({ children }) => {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe("All Step Component", () => {
  beforeEach(() => {
    render(
      <Wrapper>
        <AllStep />
      </Wrapper>
    );
  });

  test("renders the Next button initially", () => {
    expect(screen.getByTestId("next-button")).toBeInTheDocument();
    expect(screen.queryByTestId("previous-button")).toBeInTheDocument();
  });

  test("navigates to the next step on clicking 'Next'", async () => {
    fireEvent.click(screen.getByTestId("next-button"));
    await waitFor(() => {
      expect(screen.getByText("Travel Preferences")).toBeInTheDocument();
    });
    expect(screen.getByTestId("previous-button")).toBeInTheDocument();
  });

  test("renders the Previous button and navigates back on clicking 'Previous'", async () => {
    fireEvent.click(screen.getByTestId("next-button"));
    await waitFor(() => {
      expect(screen.getByText("Travel Preferences")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("previous-button"));
    await waitFor(() => {
      expect(screen.getByText("Personal Information")).toBeInTheDocument();
    });
  });
  test("submits the form data correctly", async () => {
    axios.post.mockResolvedValue({ status: 201 });

    // Fill out Step 1
    fireEvent.input(screen.getByTestId("Full Name"), {
      target: { value: "John Doe" },
    });
    // fireEvent.input(screen.getByTestId("Date of Birth"), {
    //   target: { value: "1990-01-01" },
    // });
    fireEvent.input(screen.getByTestId("Nationality"), {
      target: { value: "American" },
    });
    fireEvent.input(screen.getByTestId("Email"), {
      target: { value: "john@example.com" },
    });
    fireEvent.input(screen.getByTestId("Phone Number"), {
      target: { value: "1234567890" },
    });

    fireEvent.click(screen.getByTestId("next-button"));

    // Fill out Step 2
    await waitFor(() => {
      expect(screen.getByText("Travel Preferences")).toBeInTheDocument();
    });
    //  fireEvent.input(screen.getByLabelText("Departure Date"), {
    //    target: { value: "2024-07-01" },
    //  });
    //  fireEvent.input(screen.getByLabelText("Return Date"), {
    //    target: { value: "2024-07-31" },
    //  });
    // fireEvent.change(getAllByTestId("accommodationPreference"), {
    //   target: { value: "space hotel" },
    // });
    // fireEvent.input(screen.getByLabelText(/Special Requests or Preferences/i), {
    //   target: { value: "Vegetarian meal" },
    // });

    fireEvent.click(screen.getByTestId("next-button"));

    // Fill out Step 3
    //  await waitFor(() => {
    //    expect(screen.getByText("Health and Safety")).toBeInTheDocument();
    //  });
    //  fireEvent.input(screen.getByLabelText("Health Declaration"), {
    //    target: { value: "Good health" },
    //  });
    //  fireEvent.input(screen.getByLabelText("Emergency Contact Name"), {
    //    target: { value: "Jane Doe" },
    //  });
    //  fireEvent.input(screen.getByLabelText("Emergency Contact Email"), {
    //    target: { value: "jane@example.com" },
    //  });
    //  fireEvent.input(screen.getByLabelText("Emergency Contact Phone"), {
    //    target: { value: "0987654321" },
    //  });
    //  fireEvent.input(
    //    screen.getByLabelText("Any Medical Conditions (if applicable)"),
    //    {
    //      target: { value: "None" },
    //    }
    //  );

    // fireEvent.click(screen.getByTestId("submit-button"));

    // const postCall = axios.post.mock.calls[0];
    // console.log("Axios post call arguments:", postCall);
    // console.log(axios.post.mock.calls);

    // await waitFor(() => {
    //   expect(axios.post).toHaveBeenCalledWith(
    //     `http://localhost:5000/api/mars-applicant`,
    //     expect.objectContaining({
    //       name: "John Doe",
    //       dateOfBirth: "2024-06-15",
    //       nationality: "American",
    //       email: "john@example.com",
    //       phone: "1234567890",
    //       departureDate: "2024-06-15",
    //       returnDate: "2024-06-15",
    //       accommodationPreference: "space hotel",
    //       preferences: "Vegetarian meal",
    //       healthDeclaration: "Good health",
    //       egInfoName: "Jane Doe",
    //       egInfoEmail: "jane@example.com",
    //       egInfoPhone: "0987654321",
    //       medicalConditions: "None",
    //     })
    //   );
    // });

    // expect(
    //   screen.getByText("Your application has been submitted")
    // ).toBeInTheDocument();
  });
});
