import type { UserProfileCardProps } from "../../types/index.ts";


export function UserProfileCard({ user, showEmail, showRole, onEdit, children }: UserProfileCardProps) {

    return (
        <div className="user-display">
            <div>
                <img className="avatar" src={user.avatarUrl}></img>
                <div>
                    <h5>{user.name}</h5>
                    {(showEmail) ? <p>{user.email}</p> : null}
                    {(showRole) ? <p>{user.role}</p> : null}
                </div>
                {onEdit && (<button onClick={() => onEdit(user.id)} className="edit-button">Edit Profile</button>)}
            </div>
            {children}
        </div>

    )
}