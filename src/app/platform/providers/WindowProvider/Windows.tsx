import React, { FC, useEffect, useState } from 'react';
import { useWindowManager } from './hooks';
import { WindowInstance } from './WindowInstance';

export const Windows: FC = () => {
  const windowManager = useWindowManager();
  const [windowInstances, setWindowInstances] = useState<WindowInstance[]>([]);

  useEffect(() => {
    windowManager.windowInstancesSubject.subscribe(setWindowInstances);
  }, [windowManager]);

  return (
    <>
      {windowInstances.map(
        ({ active, component: Component, id, visible, zIndex }) => (
          <Component
            active={active}
            key={id}
            id={id}
            onClose={windowManager.closeWindow}
            onMinimise={windowManager.hideWindow}
            onSelect={windowManager.selectWindow}
            visible={visible}
            zIndex={zIndex}
          />
        )
      )}
    </>
  );
};
