import type { UserProfileCardProps } from "../../types/index.ts";

// function for user profile card jsx
export function UserProfileCard({ user, showEmail, showRole, onEdit, children }: UserProfileCardProps) {

    return (
        <div className="user-display">
            <div id="user-box">
                <img className="avatar" src={user.avatarUrl}></img>
                <div>
                    <h3>{user.name}</h3>
                    {(showEmail) ? <p>{user.email}</p> : null}
                    {(showRole) ? <p>{user.role}</p> : null}
                </div>
            </div>
            {onEdit && (<button onClick={() => onEdit(user.id)} className="edit-button">Edit Profile</button>)}
            {children}
        </div>

    )
}