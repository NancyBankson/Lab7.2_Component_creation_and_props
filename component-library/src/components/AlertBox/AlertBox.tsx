import type { AlertBoxProps } from "../../types";

export function AlertBox({ type, message, onClose, children }: AlertBoxProps) {
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
