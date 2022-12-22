
export default function User({ user }) {
    return (
        <div id={user.id}>
            <span>{user.name}</span>
        </div>
    );
}
