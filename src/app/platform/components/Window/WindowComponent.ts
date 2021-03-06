import { FC, RefObject } from 'react';

export interface WindowComponent extends FC<InjectedWindowProps> {
  appName: string;
  iconClass: string;
}

interface InjectedWindowProps {
  active: boolean;
  id: number;
  desktopRef: RefObject<HTMLElement>;
  minimizedTopPosition?: number;
  visible: boolean;
  zIndex: number;
  onClose(id: number): void;
  onMinimise(id: number): void;
  onSelect(id: number): void;
}
