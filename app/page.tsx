import Masthead from "@/components/Masthead";
import Opening from "@/components/Opening";
import Premise from "@/components/Premise";
import Evenings from "@/components/Evenings";
import HowItWorks from "@/components/HowItWorks";
import MemberStory from "@/components/MemberStory";
import Cities from "@/components/Cities";
import Membership from "@/components/Membership";
import Founder from "@/components/Founder";
import Apply from "@/components/Apply";

export default function Home() {
  return (
    <>
      <Masthead />
      <main>
        <Opening />
        <Premise />
        <Evenings />
        <HowItWorks />
        <MemberStory />
        <Cities />
        <Membership />
        <Founder />
        <Apply />
      </main>
    </>
  );
}
