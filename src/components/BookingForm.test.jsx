import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookingForm from "./BookingForm";
import { expect, test, vi } from "vitest";

test('Renders the BookingForm heading', () => {
    const availableTimes = ["17:00", "18:00"];
    const dispatch = vi.fn();

    render(
        <BrowserRouter>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </BrowserRouter>
    );

    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
})
