export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? "Default"}</strong>
      <p>{props.repository?.description ?? "Forms on React"}</p>
      <a href={props.repository?.link ?? "github"}>Acessar repositório</a>
    </li>
  );
}
