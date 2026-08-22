import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const path = "./data.json";

const date = moment().format();

const data = {
  date: date,
};

const git = simpleGit();

try {
  await jsonfile.writeFile(path, data, { spaces: 2 });

  // Ajouter tous les fichiers
  await git.add(".");

  // Créer le commit
  await git.commit(date, {
    "--date": date,
  });

  // Push vers GitHub
  await git.push();

  console.log("Successfully pushed to GitHub!");
} catch (error) {
  console.error("Error:", error);
}