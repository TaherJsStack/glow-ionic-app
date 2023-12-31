import { ModalContentType } from "../shared/enums/modal-content-types.enum";

export interface ContentModalInterface {
  id?: string,
  modalContentType: ModalContentType,
  icon: string;
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
  cancelBtnTranslate?: string;
  backdropDismiss?: boolean;
  animated?: boolean,
  cssClass?: string,
  backUrl?: string
}
