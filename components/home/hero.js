import Animation from "./animation";
import Link from "next/link";
export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요! 이건우입니다.
          <br className="hidden lg:inline-block" />
          Lifeflavor is Coding!
        </h1>
        <p className="mb-8 leading-relaxed">
          대량생산의 시대는 이미 끝났다 대체할 수 없는 사람이 되어야 한다.
          우리는 모두, 어떤 분야에서든 예술가의 마음으로 살아야 한다. 여기서
          예술이란, 상대방을 변화시키기 위한 선물이며 대가 없이 주는 것이다.
          사람의 마음을 바꾸는 일이다. 그림, 조각, 작곡이라고 해서 무조건 예술이
          되는 것도 아니며 더 많은 사람들을 바꿀수록, 더 많은 이들에게 영향을
          줄수록 더욱 훌륭한 예술가이다. 인생을 코딩으로 코딩을 예술로, 린치핀이
          되어라!
        </p>
        <div className="flex justify-center">
          <Link href="/projects" className="btn-project">
            프로젝트 보러가기
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
