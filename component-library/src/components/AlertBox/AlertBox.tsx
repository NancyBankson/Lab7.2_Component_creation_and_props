import type { AlertBoxProps } from "../../types";

// Returns jsx for alert box
export function AlertBox({ type, message, onClose, children }: AlertBoxProps) {
// alert style indicates the class of the box which is styled in css     
    const alertStyle = {
        success: "success",
        error: "error",
        warning: "warning",
        info: "info"
    }

    return (
        <div className={alertStyle[type]}>
            <div>
                <p>{message}</p>
                {onClose && (
                    <button
                        onClick={onClose}
                        className="alert-button"
                    >Close
                    </button>
                )}
            </div>
            {children}
        </div>
    );
}
