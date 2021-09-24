import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Counter from "../Counter"
import React from "react"

test("couter component works properly", ()=>{
    const { getByTestId} = render(<Counter />)
    const headerEl = getByTestId("header")
    const addOneBtnEl = getByTestId("add-one-btn")
    const addTwoBtnEl = getByTestId("add-two-btn")
    const subtractOneBtnEl = getByTestId("subtract-one-btn")
    const subtractTwoBtnEl = getByTestId("subtract-two-btn")

    expect(headerEl).toHaveTextContent("0")

    fireEvent.click(addOneBtnEl);

    expect(headerEl).toHaveTextContent("1")

    fireEvent.click(addOneBtnEl);

    expect(headerEl).toHaveTextContent("2")

    fireEvent.click(addOneBtnEl);

    expect(headerEl).toHaveTextContent("3")

    fireEvent.click(subtractTwoBtnEl);

    expect(headerEl).toHaveTextContent("1")

    fireEvent.click(subtractTwoBtnEl);

    expect(headerEl).toHaveTextContent("-1")

    fireEvent.click(subtractOneBtnEl);

    expect(headerEl).toHaveTextContent("-2")

    fireEvent.click(subtractOneBtnEl);

    expect(headerEl).toHaveTextContent("-3")

    fireEvent.click(subtractOneBtnEl);

    expect(headerEl).toHaveTextContent("-4")

    fireEvent.click(addTwoBtnEl);

    expect(headerEl).toHaveTextContent("-2")

    fireEvent.click(addTwoBtnEl);

    expect(headerEl).toHaveTextContent("0")

    fireEvent.click(addTwoBtnEl);

    expect(headerEl).toHaveTextContent("2")

})



