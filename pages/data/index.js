import User from "../../components/user";

export default function Index({ users }) {
    return  <><h4>Not found custom page</h4>
        {
            users.map(user => {
                return (
                    <div key={user.id}>
                        <User user={user} key={user.id} />
                        {/* <User user={user}></User> */}
                        {/* <span>{user.name}</span> */}
                    </div>
                );
            })
        }
    </>
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props: {
            users: data
        }
    }
}
