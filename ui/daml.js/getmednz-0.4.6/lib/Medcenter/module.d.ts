// Generated from Medcenter.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type ConfirmedVisit_Cancel = {
};

export declare const ConfirmedVisit_Cancel:
  damlTypes.Serializable<ConfirmedVisit_Cancel> & {
  }
;


export declare type ConfirmedVisit_Reject = {
};

export declare const ConfirmedVisit_Reject:
  damlTypes.Serializable<ConfirmedVisit_Reject> & {
  }
;


export declare type ConfirmedVisit_Accept = {
};

export declare const ConfirmedVisit_Accept:
  damlTypes.Serializable<ConfirmedVisit_Accept> & {
  }
;


export declare type ConfirmedVisit = {
  messageSenderConfirm: damlTypes.Party;
  multipleObserversConfirm: damlTypes.Party[];
  messageContentConfirm: string;
};

export declare const ConfirmedVisit:
  damlTypes.Template<ConfirmedVisit, undefined, '10cce1a7e48a84867656500c85211e3a63e518366fde0144aff6d29dc29a4dce:Medcenter:ConfirmedVisit'> & {
  ConfirmedVisit_Cancel: damlTypes.Choice<ConfirmedVisit, ConfirmedVisit_Cancel, {}, undefined>;
  Archive: damlTypes.Choice<ConfirmedVisit, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  ConfirmedVisit_Reject: damlTypes.Choice<ConfirmedVisit, ConfirmedVisit_Reject, {}, undefined>;
  ConfirmedVisit_Accept: damlTypes.Choice<ConfirmedVisit, ConfirmedVisit_Accept, damlTypes.ContractId<ConfirmedVisit>, undefined>;
};

export declare namespace ConfirmedVisit {
  export type CreateEvent = damlLedger.CreateEvent<ConfirmedVisit, undefined, typeof ConfirmedVisit.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ConfirmedVisit, typeof ConfirmedVisit.templateId>
  export type Event = damlLedger.Event<ConfirmedVisit, undefined, typeof ConfirmedVisit.templateId>
  export type QueryResult = damlLedger.QueryResult<ConfirmedVisit, undefined, typeof ConfirmedVisit.templateId>
}



export declare type ConfirmedVisitDetails = {
  confirmedPatientName: damlTypes.Party;
  confirmedPatientDob: string;
  confirmedPatientMessage: string;
  confirmedPatientAssistance: boolean;
  confirmedAssistanceType: string;
  confirmedPatientChaperone: boolean;
  confirmedPatientDate: damlTypes.Date;
  confirmedPatientContactNumber: string;
  confirmedMessageDate: damlTypes.Date;
};

export declare const ConfirmedVisitDetails:
  damlTypes.Serializable<ConfirmedVisitDetails> & {
  }
;


export declare type RequestVisit_Deny = {
};

export declare const RequestVisit_Deny:
  damlTypes.Serializable<RequestVisit_Deny> & {
  }
;


export declare type RequestVisit_Accept = {
};

export declare const RequestVisit_Accept:
  damlTypes.Serializable<RequestVisit_Accept> & {
  }
;


export declare type RequestVisit_Submit = {
};

export declare const RequestVisit_Submit:
  damlTypes.Serializable<RequestVisit_Submit> & {
  }
;


export declare type RequestVisit = {
  messageSenderRequest: damlTypes.Party;
  multipleObserversRequest: damlTypes.Party[];
  messageContentRequest: RequestVisitDetails;
};

export declare const RequestVisit:
  damlTypes.Template<RequestVisit, undefined, '10cce1a7e48a84867656500c85211e3a63e518366fde0144aff6d29dc29a4dce:Medcenter:RequestVisit'> & {
  RequestVisit_Deny: damlTypes.Choice<RequestVisit, RequestVisit_Deny, {}, undefined>;
  Archive: damlTypes.Choice<RequestVisit, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  RequestVisit_Accept: damlTypes.Choice<RequestVisit, RequestVisit_Accept, {}, undefined>;
  RequestVisit_Submit: damlTypes.Choice<RequestVisit, RequestVisit_Submit, damlTypes.ContractId<RequestVisit>, undefined>;
};

export declare namespace RequestVisit {
  export type CreateEvent = damlLedger.CreateEvent<RequestVisit, undefined, typeof RequestVisit.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<RequestVisit, typeof RequestVisit.templateId>
  export type Event = damlLedger.Event<RequestVisit, undefined, typeof RequestVisit.templateId>
  export type QueryResult = damlLedger.QueryResult<RequestVisit, undefined, typeof RequestVisit.templateId>
}



export declare type RequestVisitDetails = {
  requestPatientName: damlTypes.Party;
  requestPatientDob: string;
  requestPatientMessage: string;
  requestPatientAssistance: boolean;
  requestAssistanceType: string;
  requestPatientChaperone: boolean;
  requestPatientDate: damlTypes.Date;
  requestPatientContactNumber: string;
  requestMessageDate: damlTypes.Date;
};

export declare const RequestVisitDetails:
  damlTypes.Serializable<RequestVisitDetails> & {
  }
;

