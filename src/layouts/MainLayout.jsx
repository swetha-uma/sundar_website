import { Outlet } from 'react-router-dom';
import { useCallback, useState } from 'react';
import Drawer from '../components/Drawer/Drawer';
import Navbar from '../components/Navbar/Navbar';
import Achievements from '../pages/Achievements/Achievements';
import Career from '../pages/Career/Career';
import './MainLayout.css';

function MainLayout() {
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);
  const [isCareerOpen, setIsCareerOpen] = useState(false);

  const openAchievements = useCallback(() => setIsAchievementsOpen(true), []);
  const closeAchievements = useCallback(() => setIsAchievementsOpen(false), []);
  const openCareer = useCallback(() => setIsCareerOpen(true), []);
  const closeCareer = useCallback(() => setIsCareerOpen(false), []);

  return (
    <div className="main-layout">
      <Navbar onOpenAchievements={openAchievements} onOpenCareer={openCareer} />
      <Outlet />

      <Drawer isOpen={isAchievementsOpen} title="Achievements" onClose={closeAchievements}>
        <Achievements />
      </Drawer>

      <Drawer isOpen={isCareerOpen} title="Career Overview" onClose={closeCareer}>
        <Career />
      </Drawer>
    </div>
  );
}

export default MainLayout;

