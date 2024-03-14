import React from "react";
import { useSnackbar } from "react-simple-snackbar";

export default function SomeChildComponent() {
    const [openSnackbar, closeSnackbar] = useSnackbar();

    return (
        <div >
            <button onClick={() => openSnackbar("Hello world!")}>Open Snackbar</button>
            <button onClick={closeSnackbar}>Close Snackbar</button>
        </div>
    );
}
