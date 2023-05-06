//REACT
import React, { useEffect, useRef } from 'react';

//COMPONENTS
import EditorJS from '@editorjs/editorjs';

export const Editor: React.FC = () => {
  const ref = useRef<null | EditorJS>(null);
  useEffect(() => {
    if (!ref.current?.isReady) {
      ref.current = new EditorJS({
        holder: 'editorjs',
        placeholder: 'Введите текст вашей статьи',
      });
    }

    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return <div id="editorjs" ref={ref} />;
};
