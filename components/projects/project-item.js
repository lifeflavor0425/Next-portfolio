import Image from "next/legacy/image";

export default function ProjectItem({ data }) {
  const projectTitle = data.properties.name.title[0].plain_text;
  const GitHubLink = data.properties.GitHub.url;
  const URL = data.properties.URL.url;
  const projectDateStart = data.properties.workPeriod.date.start;
  const projectDateEnd = data.properties.workPeriod.date.end;
  const description = data.properties.description.rich_text[0].plain_text;
  const projectTags = data.properties.tags.multi_select;
  const imgSrc = data.cover?.file?.url || data.cover?.external.url;


  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    var startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    var endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );


    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result;
  };

  return (
    <div className="project-card">
      <div>
        <Image
          className="rounded-t-xl"
          src={imgSrc}
          width={60}
          height={30}
          // objectFit="contain"
          layout="responsive"
          quality={50}
          alt="cover image"
          priority={true}
        />
      </div>
      <div className="flex flex-col p-4">
        <h1 className="text-2xl font-bold">{projectTitle}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <h3 className="my-1">
          작업기간 : {projectDateStart}~{projectDateEnd} (
          {calculatedPeriod(projectDateStart, projectDateEnd)}일)
        </h3>
        <a href={GitHubLink}>깃허브 바로가기</a>
        <a href={URL}> 보고서 || PPT || 웹 싸이트 바로가기 </a>
        <div className="flex flex-wrap items-start mt-2 ">
          {projectTags.map((tag) => (
            <h4
              className="px-2 py-1 m-1 rounded-md bg-sky-200 dark:bg-sky-700 w-auto "
              key={tag.id}
            >
              {tag.name}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
}
