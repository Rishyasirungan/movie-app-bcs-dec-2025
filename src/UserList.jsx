import { User } from "./User";


export function UserList() {
  const users = [
    {
      name: "Arjun",
      pic: "https://media.istockphoto.com/id/1187815798/photo/i-will-be-successful.jpg?s=170667a&w=0&k=20&c=YFHcxrh9qK_zESl8K304NGQruH3nYSRgWXfR5cIPsg8=",
    },
    {
      name: "Saran",
      pic: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Tara",
      pic: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80",
    },
  ];

  return (
    <section className="user-list-container">
      {users.map((user) => (
        <User name={user.name} url={user.pic} />
      ))}
    </section>
  );
}
