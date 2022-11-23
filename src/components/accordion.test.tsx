import Accordion from "./Accordion";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Accordion", () => {
    beforeEach(() => {
        render(
            <Accordion title="Testing">
                <h4>Content</h4>
            </Accordion>
        );
    });

    test("should show title all the time", () => {
        expect(screen.getByText(/Testing/i)).toBeDefined();
    });

    test("should not show the content at the start", () => {
        expect(screen.queryByText(/Content/i)).toBeNull();
    });

    test('should show the content when the title is clicked', () => {
        const button = screen.getByText(/Open/i);
        fireEvent.click(button);
        expect(screen.getByText(/Content/i)).toBeDefined();
    });

    test('should hide the content when the title is clicked twice', () => {
        const button = screen.getByText(/Open/i);
        fireEvent.click(button);
        fireEvent.click(button);
        expect(screen.queryByText(/Content/i)).toBeNull();
    });
});
