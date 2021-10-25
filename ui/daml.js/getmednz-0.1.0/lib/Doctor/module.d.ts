// Generated from Doctor.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type TransferMedications_Cancel = {
};

export declare const TransferMedications_Cancel:
  damlTypes.Serializable<TransferMedications_Cancel> & {
  }
;


export declare type TransferMedications_Action = {
};

export declare const TransferMedications_Action:
  damlTypes.Serializable<TransferMedications_Action> & {
  }
;


export declare type PrescriptAuth = {
  senderPrescriptAuth: damlTypes.Party;
  ownerPrescriptAuth: damlTypes.Party;
  patientSummary: PatientSummary;
  patientMedications: ShortMessageList;
};

export declare const PrescriptAuth:
  damlTypes.Template<PrescriptAuth, undefined, '7c3150d57f2298e64549bbbbc07944a2ae8d512b4c84d618ca189a50f813e95f:Doctor:PrescriptAuth'> & {
  TransferMedications_Action: damlTypes.Choice<PrescriptAuth, TransferMedications_Action, damlTypes.ContractId<PrescriptAuth>, undefined>;
  Archive: damlTypes.Choice<PrescriptAuth, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  TransferMedications_Cancel: damlTypes.Choice<PrescriptAuth, TransferMedications_Cancel, {}, undefined>;
};

export declare namespace PrescriptAuth {
  export type CreateEvent = damlLedger.CreateEvent<PrescriptAuth, undefined, typeof PrescriptAuth.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<PrescriptAuth, typeof PrescriptAuth.templateId>
  export type Event = damlLedger.Event<PrescriptAuth, undefined, typeof PrescriptAuth.templateId>
  export type QueryResult = damlLedger.QueryResult<PrescriptAuth, undefined, typeof PrescriptAuth.templateId>
}



export declare type ShortMessageList = {
  prescriptionChoice: damlTypes.Optional<MessageChoicePrescript>;
  prescriptionNotes: string;
};

export declare const ShortMessageList:
  damlTypes.Serializable<ShortMessageList> & {
  }
;


export declare type MessageChoicePrescript = {
  items: LongMessageMedication[];
  dateOfIssue: damlTypes.Date;
};

export declare const MessageChoicePrescript:
  damlTypes.Serializable<MessageChoicePrescript> & {
  }
;


export declare type LongMessageMedication = {
  tabletName: string;
  tabletQuantity: damlTypes.Int;
  tableRepeat: boolean;
};

export declare const LongMessageMedication:
  damlTypes.Serializable<LongMessageMedication> & {
  }
;


export declare type PatientSummary = {
  consultingRooms: boolean;
  patientName: string;
  patientDob: string;
  patientNew: boolean;
  patientCode: damlTypes.Int;
  patientGender: string;
  patientType: damlTypes.Int;
  dateOfConsult: damlTypes.Date;
  consultNotes: string;
};

export declare const PatientSummary:
  damlTypes.Serializable<PatientSummary> & {
  }
;


export declare type ArchiveConsult = {
  closingParty: damlTypes.Party;
  closingNotes: string;
  closingDate: damlTypes.Date;
};

export declare const ArchiveConsult:
  damlTypes.Serializable<ArchiveConsult> & {
  }
;


export declare type CompleteConsult = {
  completeMedcen: damlTypes.Party;
  completeDoctor: damlTypes.Party;
  completePatient: damlTypes.Party;
};

export declare const CompleteConsult:
  damlTypes.Template<CompleteConsult, undefined, '7c3150d57f2298e64549bbbbc07944a2ae8d512b4c84d618ca189a50f813e95f:Doctor:CompleteConsult'> & {
  ArchiveConsult: damlTypes.Choice<CompleteConsult, ArchiveConsult, damlTypes.ContractId<CompleteConsult>, undefined>;
  Archive: damlTypes.Choice<CompleteConsult, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace CompleteConsult {
  export type CreateEvent = damlLedger.CreateEvent<CompleteConsult, undefined, typeof CompleteConsult.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<CompleteConsult, typeof CompleteConsult.templateId>
  export type Event = damlLedger.Event<CompleteConsult, undefined, typeof CompleteConsult.templateId>
  export type QueryResult = damlLedger.QueryResult<CompleteConsult, undefined, typeof CompleteConsult.templateId>
}



export declare type CompleteConsult_Action = {
};

export declare const CompleteConsult_Action:
  damlTypes.Serializable<CompleteConsult_Action> & {
  }
;


export declare type CompleteConsult_Cancel = {
};

export declare const CompleteConsult_Cancel:
  damlTypes.Serializable<CompleteConsult_Cancel> & {
  }
;


export declare type ContinueConsult_Terminate = {
};

export declare const ContinueConsult_Terminate:
  damlTypes.Serializable<ContinueConsult_Terminate> & {
  }
;


export declare type ContinueConsult_Cancel = {
};

export declare const ContinueConsult_Cancel:
  damlTypes.Serializable<ContinueConsult_Cancel> & {
  }
;


export declare type ContinueConsult_Start = {
};

export declare const ContinueConsult_Start:
  damlTypes.Serializable<ContinueConsult_Start> & {
  }
;


export declare type ContinueConsult_Stop = {
};

export declare const ContinueConsult_Stop:
  damlTypes.Serializable<ContinueConsult_Stop> & {
  }
;


export declare type ContinueConsult = {
  continueMedcen: damlTypes.Party;
  continueDoctor: damlTypes.Party;
  continuePatient: damlTypes.Party;
};

export declare const ContinueConsult:
  damlTypes.Template<ContinueConsult, undefined, '7c3150d57f2298e64549bbbbc07944a2ae8d512b4c84d618ca189a50f813e95f:Doctor:ContinueConsult'> & {
  ContinueConsult_Stop: damlTypes.Choice<ContinueConsult, ContinueConsult_Stop, {}, undefined>;
  ContinueConsult_Start: damlTypes.Choice<ContinueConsult, ContinueConsult_Start, damlTypes.ContractId<ContinueConsult>, undefined>;
  ContinueConsult_Cancel: damlTypes.Choice<ContinueConsult, ContinueConsult_Cancel, {}, undefined>;
  ContinueConsult_Terminate: damlTypes.Choice<ContinueConsult, ContinueConsult_Terminate, {}, undefined>;
  CompleteConsult_Cancel: damlTypes.Choice<ContinueConsult, CompleteConsult_Cancel, {}, undefined>;
  CompleteConsult_Action: damlTypes.Choice<ContinueConsult, CompleteConsult_Action, damlTypes.ContractId<CompleteConsult>, undefined>;
  Archive: damlTypes.Choice<ContinueConsult, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace ContinueConsult {
  export type CreateEvent = damlLedger.CreateEvent<ContinueConsult, undefined, typeof ContinueConsult.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ContinueConsult, typeof ContinueConsult.templateId>
  export type Event = damlLedger.Event<ContinueConsult, undefined, typeof ContinueConsult.templateId>
  export type QueryResult = damlLedger.QueryResult<ContinueConsult, undefined, typeof ContinueConsult.templateId>
}



export declare type ContinueConsult_Action = {
};

export declare const ContinueConsult_Action:
  damlTypes.Serializable<ContinueConsult_Action> & {
  }
;


export declare type ContinueConsult_Cease = {
};

export declare const ContinueConsult_Cease:
  damlTypes.Serializable<ContinueConsult_Cease> & {
  }
;


export declare type CommenceConsult_Terminate = {
};

export declare const CommenceConsult_Terminate:
  damlTypes.Serializable<CommenceConsult_Terminate> & {
  }
;


export declare type CommenceConsult_Stop = {
};

export declare const CommenceConsult_Stop:
  damlTypes.Serializable<CommenceConsult_Stop> & {
  }
;


export declare type CommenceConsult_Cancel = {
};

export declare const CommenceConsult_Cancel:
  damlTypes.Serializable<CommenceConsult_Cancel> & {
  }
;


export declare type CommenceConsult_Start = {
};

export declare const CommenceConsult_Start:
  damlTypes.Serializable<CommenceConsult_Start> & {
  }
;


export declare type CommenceConsult = {
  commenceMedcen: damlTypes.Party;
  commenceDoctor: damlTypes.Party;
  commencePatient: damlTypes.Party;
  commenceDetails: string;
};

export declare const CommenceConsult:
  damlTypes.Template<CommenceConsult, undefined, '7c3150d57f2298e64549bbbbc07944a2ae8d512b4c84d618ca189a50f813e95f:Doctor:CommenceConsult'> & {
  CommenceConsult_Start: damlTypes.Choice<CommenceConsult, CommenceConsult_Start, damlTypes.ContractId<CommenceConsult>, undefined>;
  CommenceConsult_Cancel: damlTypes.Choice<CommenceConsult, CommenceConsult_Cancel, {}, undefined>;
  CommenceConsult_Stop: damlTypes.Choice<CommenceConsult, CommenceConsult_Stop, {}, undefined>;
  CommenceConsult_Terminate: damlTypes.Choice<CommenceConsult, CommenceConsult_Terminate, {}, undefined>;
  ContinueConsult_Cease: damlTypes.Choice<CommenceConsult, ContinueConsult_Cease, {}, undefined>;
  ContinueConsult_Action: damlTypes.Choice<CommenceConsult, ContinueConsult_Action, damlTypes.ContractId<ContinueConsult>, undefined>;
  Archive: damlTypes.Choice<CommenceConsult, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace CommenceConsult {
  export type CreateEvent = damlLedger.CreateEvent<CommenceConsult, undefined, typeof CommenceConsult.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<CommenceConsult, typeof CommenceConsult.templateId>
  export type Event = damlLedger.Event<CommenceConsult, undefined, typeof CommenceConsult.templateId>
  export type QueryResult = damlLedger.QueryResult<CommenceConsult, undefined, typeof CommenceConsult.templateId>
}



export declare type DetailsCommenceConsult = {
  consultRooms: boolean;
  covidRelated: boolean;
  consultName: damlTypes.Party;
  consultType: damlTypes.Int;
  consultDate: damlTypes.Date;
  consultNotes: string;
  consultSpecialAccess: boolean;
  consultAccessDetails: string;
};

export declare const DetailsCommenceConsult:
  damlTypes.Serializable<DetailsCommenceConsult> & {
  }
;

