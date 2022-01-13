import { Alert, AlertTitle } from "@mui/material";
import "../css/ApiCallError.css";

const ApiCallError = () => {
    return (
        <div className="apiCallError">
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                An error ocurred while — <strong>loading the products</strong>
            </Alert>
        </div>
    );
};

export default ApiCallError;
