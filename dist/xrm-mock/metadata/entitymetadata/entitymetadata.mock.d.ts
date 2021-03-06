/// <reference types="xrm" />
export declare class EntityMetadataMock implements Xrm.Metadata.EntityMetadata {
    ActivityTypeMask: number;
    Attributes: Xrm.Collection.StringIndexableItemCollection<Xrm.Metadata.AttributeMetadata>;
    AutoRouteToOwnerQueue: boolean;
    CanEnableSyncToExternalSearchIndex: boolean;
    CanBeInManyToMany: boolean;
    CanBePrimaryEntityInRelationship: boolean;
    CanBeRelatedEntityInRelationship: boolean;
    CanCreateAttributes: boolean;
    CanCreateCharts: boolean;
    CanCreateForms: boolean;
    CanCreateViews: boolean;
    CanModifyAdditionalSettings: boolean;
    CanTriggerWorkflow: boolean;
    Description: Xrm.Metadata.Label;
    DisplayCollectionName: Xrm.Metadata.Label;
    DisplayName: Xrm.Metadata.Label;
    EntityColor: string;
    EntitySetName: string;
    IconLargeName: string;
    IconMediumName: string;
    IconSmallName: string;
    IsActivity: boolean;
    IsActivityParty: boolean;
    IsAuditEnabled: boolean;
    IsAvailableOffline: boolean;
    IsBPFEntity: boolean;
    IsChildEntity: boolean;
    IsConnectionsEnabled: boolean;
    IsCustomEntity: boolean;
    IsCustomizable: boolean;
    IsDocumentManagementEnabled: boolean;
    IsDuplicateDetectionEnabled: boolean;
    IsEnabledForCharts: boolean;
    IsOneNotIntegrationEnabled: boolean;
    IsOptimisitcConcurrencyEnabled: boolean;
    IsQuickCreateEnabled: boolean;
    IsImportable: boolean;
    IsIntersect: boolean;
    IsMailMergeEnabled: boolean;
    IsManaged: boolean;
    IsMappable: boolean;
    IsReadingPaneEnabled: boolean;
    IsRenameable: boolean;
    IsStateModelAware: boolean;
    IsValidForAdvancedFind: boolean;
    IsValidForQueue: boolean;
    IsVisibleInMobileClient: boolean;
    LogicalCollectionName: string;
    LogicalName: string;
    ObjectTypeCode: number;
    OwnershipTypeCode: number;
    PrimaryIdAttribute: string;
    PrimaryNameAttribute: string;
    RecurrenceBaseEntityLogicalName: string;
    PrimaryImageAttribute: string;
    constructor(components: IEntityMetadataComponents);
}
export interface IEntityMetadataComponents {
    ActivityTypeMask?: number;
    Attributes?: Xrm.Collection.StringIndexableItemCollection<Xrm.Metadata.AttributeMetadata>;
    AutoRouteToOwnerQueue?: boolean;
    CanEnableSyncToExternalSearchIndex?: boolean;
    CanBeInManyToMany?: boolean;
    CanBePrimaryEntityInRelationship?: boolean;
    CanBeRelatedEntityInRelationship?: boolean;
    CanCreateAttributes?: boolean;
    CanCreateCharts?: boolean;
    CanCreateForms?: boolean;
    CanCreateViews?: boolean;
    CanModifyAdditionalSettings?: boolean;
    CanTriggerWorkflow?: boolean;
    Description?: Xrm.Metadata.Label;
    DisplayCollectionName?: Xrm.Metadata.Label;
    DisplayName?: Xrm.Metadata.Label;
    EntityColor?: string;
    EntitySetName?: string;
    IconLargeName?: string;
    IconMediumName?: string;
    IconSmallName?: string;
    IsActivity?: boolean;
    IsActivityParty?: boolean;
    IsAuditEnabled?: boolean;
    IsAvailableOffline?: boolean;
    IsBPFEntity?: boolean;
    IsChildEntity?: boolean;
    IsConnectionsEnabled?: boolean;
    IsCustomEntity?: boolean;
    IsCustomizable?: boolean;
    IsDocumentManagementEnabled?: boolean;
    IsDuplicateDetectionEnabled?: boolean;
    IsEnabledForCharts?: boolean;
    IsOneNotIntegrationEnabled?: boolean;
    IsOptimisitcConcurrencyEnabled?: boolean;
    IsQuickCreateEnabled?: boolean;
    IsImportable?: boolean;
    IsIntersect?: boolean;
    IsMailMergeEnabled?: boolean;
    IsManaged?: boolean;
    IsMappable?: boolean;
    IsReadingPaneEnabled?: boolean;
    IsRenameable?: boolean;
    IsStateModelAware?: boolean;
    IsValidForAdvancedFind?: boolean;
    IsValidForQueue?: boolean;
    IsVisibleInMobileClient?: boolean;
    LogicalCollectionName?: string;
    LogicalName?: string;
    ObjectTypeCode?: number;
    OwnershipTypeCode?: number;
    PrimaryIdAttribute?: string;
    PrimaryNameAttribute?: string;
    RecurrenceBaseEntityLogicalName?: string;
    PrimaryImageAttribute?: string;
}
