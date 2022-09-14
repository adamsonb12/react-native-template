import { ReactNode } from "react";
import { Portal, Dialog as PaperDialog, DialogProps } from "react-native-paper";

interface Props extends Partial<DialogProps> {
  children: ReactNode;
}

export const Dialog = ({ children, ...props }: Props) => {
  return (
    <Portal>
      <PaperDialog
        visible
        theme={{
          colors: {
            backdrop: "rgba(0,0,0,0.5)",
          },
        }}
        {...(props as DialogProps)}
      >
        {children}
      </PaperDialog>
    </Portal>
  );
};

export const DialogTitle = PaperDialog.Title;
export const DialogContent = PaperDialog.Content;
export const DialogIcon = PaperDialog.Icon;
export const DialogActions = PaperDialog.Actions;
export const DialogScrollArea = PaperDialog.ScrollArea;
