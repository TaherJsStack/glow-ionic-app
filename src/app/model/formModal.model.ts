import { ModalFormType } from "../shared/enums/modal-form-types.enum";

export interface FormModalInterface {
  formType: ModalFormType;
  icon: string,
  title: string;
  description?: string;
  confirmOnlyBtn?: boolean;
  confirmOnlyBtnText?: string;
  confirmOnlyBtnFunction?: any;
  actionBtn?: boolean;
  actionBtnText?: string;
  actionBtnColor?: string;
  actionBtnFunction?: any;
  context?: any;
  backdropDismiss?: boolean;
  animated?: boolean,
  cssClass?: string,
}
