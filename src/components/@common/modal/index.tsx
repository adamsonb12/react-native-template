import { ReactNode } from "react";
import { View } from "react-native";
import { ModalProps, Portal, Modal as PaperModal } from "react-native-paper";
import styled from "styled-components/native";

import { Card } from "../card";
import { spacing32 } from "../theme";

interface Props extends Partial<ModalProps> {
  children: ReactNode;
}

const ModalContentWrapper = styled(View)`
  padding: 0 ${spacing32};
`;

export const Modal = ({ children, ...props }: Props) => {
  return (
    <Portal>
      <PaperModal
        visible
        theme={{
          colors: {
            backdrop: "rgba(0,0,0,0.5)",
          },
        }}
        {...(props as ModalProps)}
      >
        <ModalContentWrapper>
          <Card>{children}</Card>
        </ModalContentWrapper>
      </PaperModal>
    </Portal>
  );
};
