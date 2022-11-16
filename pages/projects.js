import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project-item";

export default function Projects({ projects }) {
  console.log(projects);
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen px-5 py-24 mb -10 px-6">
          <Head>
            <title> Lifeflavor Coding 포트폴리오</title>
            <meta
              name="description"
              content="오늘도 인생의맛(lifeflavor) 코딩"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1 className="text-4xl font-bold sm:text-6xl">
            {" "}
            총 프로젝트 :{" "}
            <span className="pl-4 text-yellow-500">
              {projects.results.length}
            </span>
          </h1>

          <div className="grid grid-cols-1 m-6 py-10  md:grid-cols-2 gap-8 w-full">
            {projects.results.map((aProject) => (
              <ProjectItem key={aProject.id} data={aProject} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
//
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 100,
      sorts: [
        {
          property: "name",
          direction: "descending",
        },
      ],
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await res.json();
  return {
    props: { projects },
    revalidate: 1, // 데이터 변경이 있으면 갱신 1초 마다 - 갱신 주기 설정 가능
  };
}
