//REACT
import React, { useEffect } from 'react';

//COMPONENTS
import EditorJS, { OutputData } from '@editorjs/editorjs';

interface EditorProps {
  onChange: (blocks: OutputData['blocks']) => void;
}

export const Editor: React.FC<EditorProps> = ({ onChange }) => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editorjs',
      placeholder: 'Введите текст вашей статьи',
      async onChange() {
        const { blocks } = await editor.save();
        onChange(blocks);
      },
    });

    return () => {
      editor.isReady
        .then(() => {
          editor.destroy();
        })
        .catch((error) => console.error('Error editor cleanup', error));
    };
  }, []);

  return <div id="editorjs" />;
};
