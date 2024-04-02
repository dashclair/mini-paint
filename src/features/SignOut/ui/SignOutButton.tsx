import { CustomButton } from 'shared/ui';
import { IconComponent } from 'shared/ui';
import styles from './SignOutButton.module.scss';
import { signOutUser } from '../lib/signOutUser';
import { Modal } from 'antd';
import { useState } from 'react';

export const SignOutButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <CustomButton type="link" onClick={showModal} className={styles.iconButton}>
        {<IconComponent iconName="exit" className={styles.exitIcon} />}
      </CustomButton>
      <Modal title="Sign out" open={isModalOpen} onOk={signOutUser} onCancel={handleCancel}>
        <p>Are you sure you want to leave the page?</p>
      </Modal>
    </>
  );
};
