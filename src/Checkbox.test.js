import { fireEvent } from "@testing-library/dom";
import {render} from "@testing-library/react"
import {Checkbox} from "./Checkbox"



test("Selection checkbox", ()=>{
    const{ getByLabelText} = render(<Checkbox />)
    const checkbox = getByLabelText(/not checked/);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);

})