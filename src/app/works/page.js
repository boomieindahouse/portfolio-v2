import WorksTitle from '../../components/works/WorksTitle'
import WorksBanner from '@/components/home/WorksBanner';
import RecentWorks from '@/components/works/RecentWorks';


export default function Home() {
  return (
    <div>
      <WorksTitle />
      <WorksBanner />
      <RecentWorks />
    </div>
  );
}