import Image from "next/image";

export default function ProjectItem({ data }) {
  const projectTitle = data.properties.name.title[0].plain_text;
  const GitHubLink = data.properties.GitHub.url;
  const URL = data.properties.URL.url;
  const projectDateStart = data.properties.workPeriod.date.start;
  const projectDateEnd = data.properties.workPeriod.date.end;
  const description = data.properties.description.rich_text[0].plain_text;
  const projectTags = data.properties.tags.multi_select;
  const imgSrc = data.cover.file?.url || data.cover.external.url;

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

    console.log(`startDate: ${startDate}`);
    console.log(`endDate: ${endDate}`);

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    console.log(`기간 : ${result}`);
    return result;
  };

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={imgSrc}
        width={500}
        height={500}
        objectFit="cover"
        quality={100}
        alt="cover image"
        layout="responsive"
        priority
      />
      <div className="flex flex-col p-4">
        <h1 className="text-2xl font-bold">{projectTitle}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <h3 className="my-1">
          작업기간 :{projectDateStart}~{projectDateEnd} (
          {calculatedPeriod(projectDateStart, projectDateEnd)}일)
        </h3>
        <a href={GitHubLink}>깃허브 바로가기</a>
        <a href={URL}> 웹 싸이트 바로가기 </a>
        <div className="flex items-start mt-2">
          {projectTags.map((tag) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
              key={tag.id}
            >
              {tag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
