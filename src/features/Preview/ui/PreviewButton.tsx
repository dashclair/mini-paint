import { Modal } from 'antd';
import { CustomButton } from 'shared/ui';
import { useModal } from 'shared/model/useModal';

import styles from './PreviewButtonStyles.module.scss';

interface PreviewButtonProps {
  image: string;
}

export const PreviewButton = ({ image }: PreviewButtonProps) => {
  const { isModalOpen, showModal, handleCancel } = useModal();
  return (
    <div>
      <CustomButton onClick={() => showModal()}>Preview</CustomButton>
      <Modal open={isModalOpen} onCancel={handleCancel} footer={[]} centered>
        <img className={styles.modalWindow} alt="example" src={image} />
      </Modal>
    </div>
  );
};
