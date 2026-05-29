import { Outlet } from 'react-router-dom';
import { useCallback, useState } from 'react';
import Drawer from '../components/Drawer/Drawer';
import Navbar from '../components/Navbar/Navbar';
import Achievements from '../pages/Achievements/Achievements';
import Voices from '../pages/Voices/Voices';
import './MainLayout.css';

function MainLayout() {
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);
  const [isVoicesOpen, setIsVoicesOpen] = useState(false);

  const openAchievements = useCallback(() => setIsAchievementsOpen(true), []);
  const closeAchievements = useCallback(() => setIsAchievementsOpen(false), []);
  const openVoices = useCallback(() => setIsVoicesOpen(true), []);
  const closeVoices = useCallback(() => setIsVoicesOpen(false), []);

  return (
    <div className="main-layout">
      <Navbar onOpenAchievements={openAchievements} onOpenVoices={openVoices} />
      <Outlet />

      <Drawer isOpen={isAchievementsOpen} title="Achievements" onClose={closeAchievements}>
        <Achievements />
      </Drawer>

      <Drawer isOpen={isVoicesOpen} title="Voices" onClose={closeVoices}>
        <Voices />
      </Drawer>
    </div>
  );
}

export default MainLayout;
