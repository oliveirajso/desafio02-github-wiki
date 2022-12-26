
import { useState } from "react";
import gitLogo from "../assets/github.png";
import Button from "../components/Button";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import { api } from "../services/api";

import { Container } from "./styles";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);
  const [checkedTipoConsulta, setCheckedTipoConsulta] = useState(false);

  const handleSearchRepo = async () => {
    if (currentRepo.length === 0) {
      alert("Digite o nome do repositório");
    }
    const { data } = await api.get(`repos/${currentRepo}`);
    if (data.id) {
      const isExist = repos.find((repo) => repo.id === data.id);
      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return;
      }
    }
    alert("Repositório não encontrado");
  };

  const handleRemoveRepo = (id) => {
    console.log("Repos ", repos);
    const repoIndex = repos.findIndex((repo) => repo.id === id);
    setRepos((prev) => prev.splice(repoIndex, 1));
    console.log("Repos ", repos);
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo" />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
        placeholder="Digite o nome do repositório"
      />

      {/* <Checkbox onChange={(e) => setCheckedTipoConsulta(e.target.value)} /> */}
      <Button
        onClick={handleSearchRepo}
        title={checkedTipoConsulta ? "Buscar usuarios" : "Buscar Projeto"}
      />
      {repos.map((repo) => (
        <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />
      ))}
    </Container>
  );
}

export default App;
