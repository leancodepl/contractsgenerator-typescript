/*eslint-disable prettier/prettier, unused-imports/no-unused-vars-ts, @typescript-eslint/no-unused-vars, @typescript-eslint/ban-types, @typescript-eslint/no-empty-interface, @typescript-eslint/no-namespace, @nrwl/nx/enforce-module-boundaries, import/no-anonymous-default-export */                        
import type { CqrsImplStub as CQRS } from "."

export type Query<TResult> = {} 
export type Command = {}
export type Operation<TResult> = {} 

export interface IOwnBankAccount {
}
export interface IOwnBothWallets {
}
export interface IOwnCategory {
}
export interface IOwnCategoryGroup {
}
export interface IOwnCategoryOrCategoryGroup {
}
export interface IOwnSubtransaction {
}
export interface IOwnSubtransactions {
}
export interface IOwnTransaction {
}
export interface IOwnWallet {
}
export interface IOwnWealthItem {
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsBankAccountAttribute
 */
export interface AssignCustomBankAccountName extends Command, IBankAccountRelated {
    Name?: string;
}
export namespace AssignCustomBankAccountName {
    export const ErrorCodes = {
        BankAccountIdInvalid: 1,
        BankAccountDoesNotExist: 2,
        NameTooLong: 3
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
export interface BankAccountDTO {
    Id: string;
    Type: BankAccountTypeDTO;
    Iban?: string;
    IbanHash: string;
    Name: string;
    FriendlyName?: string;
    UserAssignedName?: string;
    CreditCardNumber?: string;
    CurrencyCode: string;
    BalanceSmallestUnit?: number;
    MultipleAccessType: MultipleAccessTypeDTO;
    MostRecentImport?: ImportDTO;
}
export interface BankAccountsDTO {
    Bank: BankDTO;
    Accounts: BankAccountDTO[];
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsBankAccountAttribute
 */
export interface DeleteBankAccount extends Command, IBankAccountRelated {
}
export namespace DeleteBankAccount {
    export const ErrorCodes = {
        BankAccountIdInvalid: 1
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
export interface ImportDTO {
    Id: string;
    KontomatikSessionId?: string;
    KontomatikMultipleAccess?: string;
    Status: BankAccountImportStatusDTO;
    Date: string;
    /**
     * If `Status` is `Failed` and this property is null it means it's an error on our side.
     */
    KontomatikErrorName?: string;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 */
export interface MyBankAccounts extends Query<MyBankAccountsDTO> {
}
export interface MyBankAccountsDTO {
    UnknownAccountsImportsInProgress: boolean;
    BanksWithAccounts: BankAccountsDTO[];
}
export interface BudgetDTO {
    CategoryBudgets: CategoryBudgetDTO[];
    OtherCategoriesPlannedBalancePlnSmallestUnit: number;
    OtherCategoriesBalancePlnSmallestUnit: number;
    OtherCategoryBalances: CategoryBalanceDTO[];
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 */
export interface BudgetSummary extends Query<BudgetSummaryDTO> {
    /**
     * Day is ignored
     */
    BillingCycle: string;
}
export interface BudgetSummaryDTO {
    PlannedExpensesPlnSmallestUnit: number;
    ExpensesPlnSmallestUnit: number;
}
export interface CategoryBudgetDTO {
    /**
     * May be a CategoryGroup ID
     */
    CategoryId: string;
    PlannedBalancePlnSmallestUnit: number;
    Comment?: string;
    Type: CategoryBudgetTypeDTO;
    BalancePlnSmallestUnit: number;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 */
export interface CopyBudgetValidation extends Query<CopyBudgetValidationDTO> {
    /**
     * Day is ignored
     */
    NewBillingCycle: string;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 */
export interface CopyMostRecentBudgetPlan extends Command {
    /**
     * Day is ignored
     */
    NewBillingCycle: string;
}
export namespace CopyMostRecentBudgetPlan {
    export const ErrorCodes = {
        BudgetPlanAlreadyExistsForTheBillingCycle: 1,
        NoPreviousBudgetPlansExist: 2
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsCategoryOrCategoryGroupAttribute
 */
export interface DeleteCategoryBudgetPlan extends Command, ICategoryOrCategoryGroupRelated {
    /**
     * Day is ignored
     */
    BillingCycle: string;
}
export namespace DeleteCategoryBudgetPlan {
    export const ErrorCodes = {
        CategoryIdInvalid: 1
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 */
export interface MyBudgetInBillingCycle extends Query<BudgetDTO> {
    /**
     * Day is ignored
     */
    BillingCycle: string;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsCategoryOrCategoryGroupAttribute
 */
export interface PlanCategoryBudget extends Command, ICategoryOrCategoryGroupRelated {
    /**
     * Day is ignored
     */
    BillingCycle: string;
    PlannedBalancePlnSmallestUnit: number;
    Comment?: string;
}
export namespace PlanCategoryBudget {
    export const ErrorCodes = {
        CategoryIdInvalid: 1,
        CategoryDoesNotExist: 2,
        CategoryIsInAnotherBudgetPlanCategoryGroup: 3,
        InvalidCategoryKind: 4,
        BalanceIsNegative: 5,
        CommentIsTooLong: 6
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 */
export interface PlanOtherCategoriesBudget extends Command {
    /**
     * Day is ignored
     */
    BillingCycle: string;
    PlannedBalancePlnSmallestUnit: number;
}
export namespace PlanOtherCategoriesBudget {
    export const ErrorCodes = {
        BalanceIsNegative: 1
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsCategoryGroupAttribute
 */
export interface AddCategory extends Command, ICategoryGroupRelated {
    Name: string;
    Kind: CategoryKindDTO;
}
export namespace AddCategory {
    export const ErrorCodes = {
        InvalidCategoryGroupId: 1,
        CategoryGroupDoesNotExist: 2,
        NameRequired: 3,
        NameTooLong: 4,
        InvalidKind: 5
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 */
export interface AddCategoryGroup extends Command {
    Name: string;
    Color: string;
    Icon: CategoryGroupIconDTO;
}
export namespace AddCategoryGroup {
    export const ErrorCodes = {
        NameRequired: 1,
        NameTooLong: 2,
        ColorRequired: 3,
        ColorInvalid: 4,
        InvalidIcon: 5
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
export interface CategoryBalanceDTO {
    Id: string;
    PlnBalanceSmallestUnit: number;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 */
export interface CategoryBalances extends Query<CategoryBalancesDTO> {
    TransactionDateInclusiveFrom?: string;
    TransactionDateInclusiveTo?: string;
    TransactionFilter?: string;
    RelevantFilter?: boolean;
    CategoryConfirmedFilter?: boolean;
    IncomeFilter?: boolean;
    BankAccountIdsFilter?: string[];
    WalletIdsFilter?: string[];
    TagIdsFilter?: string[];
}
export interface CategoryBalancesDTO {
    TotalPlnBalanceSmallestUnit: number;
    CategoryGroups: CategoryGroupBalanceDTO[];
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 */
export interface CategoryBalancesSummary extends Query<CategoryGroupBalanceSummaryDTO[]> {
    /**
     * Day is ignored
     */
    BillingCycle: string;
}
export interface CategoryDTO {
    Id: string;
    Name: string;
    Kind: CategoryKindDTO;
}
export interface CategoryGroupBalanceDTO {
    Id: string;
    PlnBalanceSmallestUnit: number;
    Categories: CategoryBalanceDTO[];
}
export interface CategoryGroupBalanceSummaryDTO {
    /**
     * Other categories if null
     */
    Id?: string;
    PlnBalanceSmallestUnit: number;
    TotalBalancePercent: number;
}
export interface CategoryGroupDTO {
    Id: string;
    Name: string;
    Color: string;
    Icon: CategoryGroupIconDTO;
    Categories: CategoryDTO[];
}
export interface CategoryGroupRelationsDTO {
    Id: string;
    CategoryIds: string[];
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsCategoryAttribute
 */
export interface DeleteCategory extends Command, ICategoryRelated {
    CategorizationHandling: AfterCategoryDeletionCategorizationHandlingDTO;
    MoveTransactionsToCategoryId?: string;
}
export namespace DeleteCategory {
    export const ErrorCodes = {
        InvalidCategoryId: 1,
        CannotDeleteNoneCategory: 2,
        InvalidCategorizationHandling: 3,
        InvalidMoveTransactionsToCategoryId: 4,
        CategoryToMoveTransactionsToDoesNotExist: 5,
        CategoryToMoveTransactionsToMustBeDifferent: 6,
        CategoryToMoveTransactionsToHasDifferentKind: 7
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsCategoryGroupAttribute
 */
export interface DeleteCategoryGroup extends Command, ICategoryGroupRelated {
}
export namespace DeleteCategoryGroup {
    export const ErrorCodes = {
        InvalidCategoryGroupId: 1,
        CannotDeleteNoneCategoryGroup: 2,
        CategoryGroupHasSomeCategories: 3
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * Order in the lists resembles expected order.
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 */
export interface EditCategoriesRelations extends Command {
    CategoriesRelations: CategoryGroupRelationsDTO[];
}
export namespace EditCategoriesRelations {
    export const ErrorCodes = {
        CategoriesRelationsCantBeNull: 1,
        AllCategoryGroupRelationsCantBeNull: 2,
        SomeCategoryGroupIdsAreInvalid: 3,
        SomeCategoryIdsAreInvalid: 4,
        CategoryGroupsAreNotSetEqual: 5,
        CategoriesAreNotSetEqual: 6
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsCategoryAttribute
 */
export interface EditCategory extends Command, ICategoryRelated {
    Name: string;
}
export namespace EditCategory {
    export const ErrorCodes = {
        InvalidCategoryId: 1,
        CategoryDoesNotExist: 2,
        NameRequired: 3,
        NameTooLong: 4
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsCategoryGroupAttribute
 */
export interface EditCategoryGroup extends Command, ICategoryGroupRelated {
    Name: string;
    Color: string;
    Icon: CategoryGroupIconDTO;
}
export namespace EditCategoryGroup {
    export const ErrorCodes = {
        InvalidCategoryGroupId: 1,
        CategoryGroupDoesNotExist: 2,
        NameRequired: 3,
        NameTooLong: 4,
        ColorRequired: 5,
        ColorInvalid: 6,
        InvalidIcon: 7
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 */
export interface MyCategories extends Query<MyCategoriesDTO> {
}
export interface MyCategoriesDTO {
    Uncategorized: CategoryGroupDTO;
    CategoryGroups: CategoryGroupDTO[];
}
export interface IBankAccountRelated {
    BankAccountId: string;
}
export interface IBothWalletsRelated {
    SourceWalletId: string;
    TargetWalletId: string;
}
export interface ICategoryGroupRelated {
    CategoryGroupId: string;
}
export interface ICategoryOrCategoryGroupRelated {
    CategoryId: string;
}
export interface ICategoryRelated {
    CategoryId: string;
}
export interface ISubtransactionRelated {
    SubtransactionId: string;
}
export interface ISubtransactionsRelated {
    SubtransactionIds?: string[];
}
export interface ITransactionRelated {
    TransactionId: string;
}
export interface IWalletRelated {
    WalletId: string;
}
export interface IWealthItemRelated {
    WealthItemId: string;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsSubtransactionAttribute
 */
export interface AssignCustomSubtransactionTitle extends Command, ISubtransactionRelated {
    Title?: string;
}
export namespace AssignCustomSubtransactionTitle {
    export const ErrorCodes = {
        SubtransactionIdNotValid: 1,
        SubtransactionDoesNotExist: 2,
        TitleTooLong: 3
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsTransactionAttribute
 */
export interface AssignCustomTransactionTitle extends Command, ITransactionRelated {
    Title?: string;
}
export namespace AssignCustomTransactionTitle {
    export const ErrorCodes = {
        TransactionIdNotValid: 1,
        TransactionDoesNotExist: 2,
        TitleTooLong: 3
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 */
export interface BalanceInBillingCycle extends Query<BalanceInBillingCycleWithComparisonDTO> {
    /**
     * Day is ignored
     */
    BillingCycle: string;
}
export interface BalanceInBillingCycleDTO {
    BillingCycle: string;
    BalancePlnSmallestUnit: number;
    ExpensesPlnSmallestUnit: number;
    IncomesPlnSmallestUnit: number;
}
export interface BalanceInBillingCycleWithComparisonDTO {
    BalancePlnSmallestUnit: number;
    ExpensesPlnSmallestUnit: number;
    ExpensesLastBillingCycleDifferencePercent?: number;
    IncomesPlnSmallestUnit: number;
    IncomesLastBillingCycleDifferencePercent?: number;
}
/**
 * Keep filters in sync with `PaginatedTransactions` query.
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 */
export interface BalanceSummary extends Query<BalanceSummaryDTO> {
    TransactionDateInclusiveFrom?: string;
    TransactionDateInclusiveTo?: string;
    Filter?: string;
    RelevantFilter?: boolean;
    CategoryConfirmedFilter?: boolean;
    IncomeFilter?: boolean;
    /**
     * Possibly a group category ID
     */
    CategoryIdFilter?: string;
    BankAccountIdsFilter?: string[];
    WalletIdsFilter?: string[];
    TagIdsFilter?: string[];
}
export interface BalanceSummaryDTO {
    ExpensesPlnSmallestUnit: number;
    IncomesPlnSmallestUnit: number;
}
/**
 * Up to 12 billing cycles ordered ascending.
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 */
export interface BalancesByBillingCycles extends Query<BalanceInBillingCycleDTO[]> {
    /**
     * Day is ignored
     */
    BillingCycle: string;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsSubtransactionsAttribute
 */
export interface BulkDeleteTransactions extends Command, ISubtransactionsRelated {
}
export namespace BulkDeleteTransactions {
    export const ErrorCodes = {
        SomeSubtransactionIdsNotValid: 1,
        TooManySubtransactions: 2
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsSubtransactionsAttribute
 */
export interface BulkMarkAsIrrelevant extends Command, ISubtransactionsRelated {
}
export namespace BulkMarkAsIrrelevant {
    export const ErrorCodes = {
        SomeSubtransactionIdsNotValid: 1,
        SomeSubtransactionsDoNotExist: 2,
        TooManySubtransactions: 3
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsSubtransactionsAttribute
 */
export interface BulkMarkAsRelevant extends Command, ISubtransactionsRelated {
}
export namespace BulkMarkAsRelevant {
    export const ErrorCodes = {
        SomeSubtransactionIdsNotValid: 1,
        SomeSubtransactionsDoNotExist: 2,
        TooManySubtransactions: 3
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsSubtransactionsAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsCategoryAttribute
 */
export interface BulkOverrideTransactionCategories extends Command, ISubtransactionsRelated, ICategoryRelated {
}
export namespace BulkOverrideTransactionCategories {
    export const ErrorCodes = {
        SomeSubtransactionIdsNotValid: 1,
        SomeSubtransactionsDoNotExist: 2,
        TooManySubtransactions: 3,
        CategoryIdIsInvalid: 4,
        CategoryDoesNotExist: 5,
        SubtransactionsDoNotMatchCategoryKind: 6
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsSubtransactionAttribute
 */
export interface ConfirmTransactionCategory extends Command, ISubtransactionRelated {
}
export namespace ConfirmTransactionCategory {
    export const ErrorCodes = {
        SubtransactionIdInvalid: 1,
        SubtransactionDoesNotExist: 2,
        CannotConfirmTransactionsCategory: 3
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsWalletAttribute
 */
export interface CreateWalletTransaction extends Command, IWalletRelated {
    Name: string;
    CategoryId: string;
    TransactionDate: string;
    AmountSmallestUnit: number;
}
export namespace CreateWalletTransaction {
    export const ErrorCodes = {
        WalletIdNotValid: 1,
        WalletDoesNotExist: 2,
        NameRequired: 3,
        NameTooLong: 4,
        CategoryIdNotValid: 5,
        CategoryDoesNotExist: 6,
        AmountDoesNotMatchCategoryKind: 7
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsTransactionAttribute
 */
export interface DeleteTransaction extends Command, ITransactionRelated {
}
export namespace DeleteTransaction {
    export const ErrorCodes = {
        TransactionIdNotValid: 1
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsTransactionAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsWalletAttribute
 */
export interface EditWalletTransaction extends Command, ITransactionRelated, IWalletRelated {
    Name: string;
    CategoryId: string;
    TransactionDate: string;
    AmountSmallestUnit: number;
}
export namespace EditWalletTransaction {
    export const ErrorCodes = {
        TransactionIdNotValid: 1,
        TransactionDoesNotExist: 2,
        TransactionTypeNotValid: 3,
        SplitTransactionsCannotBeEdited: 4,
        WalletIdNotValid: 5,
        WalletDoesNotExist: 6,
        NameRequired: 7,
        NameTooLong: 8,
        CategoryIdNotValid: 9,
        CategoryDoesNotExist: 10,
        AmountDoesNotMatchCategoryKind: 11
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsSubtransactionAttribute
 */
export interface MarkAsIrrelevant extends Command, ISubtransactionRelated {
}
export namespace MarkAsIrrelevant {
    export const ErrorCodes = {
        SubtransactionIdNotValid: 1,
        SubtransactionDoesNotExist: 2
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsSubtransactionAttribute
 */
export interface MarkAsRelevant extends Command, ISubtransactionRelated {
}
export namespace MarkAsRelevant {
    export const ErrorCodes = {
        SubtransactionIdNotValid: 1,
        SubtransactionDoesNotExist: 2
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
export interface NewSubtransactionDTO {
    Id: string;
    /**
     * In the same currency as parent transaction.
     */
    AmountSmallestUnit: number;
    CategoryId?: string;
    UserAssignedTitle?: string;
    Irrelevant: boolean;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsSubtransactionAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsCategoryAttribute
 */
export interface OverrideTransactionCategory extends Command, ISubtransactionRelated, ICategoryRelated {
}
export namespace OverrideTransactionCategory {
    export const ErrorCodes = {
        SubtransactionIdIsInvalid: 1,
        SubtransactionDoesNotExist: 2,
        CategoryIdIsInvalid: 3,
        CategoryDoesNotExist: 4,
        SubtransactionDoesNotMatchCategoryKind: 5
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 */
export interface PaginatedTransactions extends SortedQuery<TransactionDTO, PaginatedTransactionsSortFieldDTO> {
    TransactionDateInclusiveFrom?: string;
    TransactionDateInclusiveTo?: string;
    Filter?: string;
    RelevantFilter?: boolean;
    CategoryConfirmedFilter?: boolean;
    IncomeFilter?: boolean;
    /**
     * Possibly a group category ID
     */
    CategoryIdFilter?: string;
    BankAccountIdsFilter?: string[];
    WalletIdsFilter?: string[];
    TagIdsFilter?: string[];
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsTransactionAttribute
 */
export interface SplitTransaction extends Command, ITransactionRelated {
    Subtransactions?: NewSubtransactionDTO[];
}
export namespace SplitTransaction {
    export const ErrorCodes = {
        TransactionIdNotValid: 1,
        TransactionDoesNotExist: 2,
        SubtransactionIdNotValid: 3,
        SubtransactionIdNotUnique: 4,
        SubtransactionAlreadyExists: 5,
        CategoryIdNotValid: 6,
        CategoryDoesNotExist: 7,
        CategoryKindDoesNotMatch: 8,
        AmountIncorrectSign: 9,
        AmountSumDoesNotMatch: 10,
        SubtransactionTitleTooLong: 11
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
export interface SubtransactionDTO {
    Id: string;
    /**
     * In the same currency as parent transaction.
     */
    AmountSmallestUnit: number;
    AmountPlnSmallestUnit?: number;
    CategoryId?: string;
    CanConfirmCategory: boolean;
    UserAssignedTitle?: string;
    Irrelevant: boolean;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 */
export interface MyTags extends Query<TagDTO[]> {
    FilterByTransactions: boolean;
    TransactionDateInclusiveFrom?: string;
    TransactionDateInclusiveTo?: string;
    TransactionFilter?: string;
    RelevantFilter?: boolean;
    CategoryConfirmedFilter?: boolean;
    IncomeFilter?: boolean;
    /**
     * Possibly a group category ID
     */
    CategoryIdFilter?: string;
    BankAccountIdsFilter?: string[];
    WalletIdsFilter?: string[];
}
export interface TagDTO {
    Id: string;
    Name: string;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsTransactionAttribute
 */
export interface TagTransaction extends Command, ITransactionRelated {
    Tags?: string[];
}
export namespace TagTransaction {
    export const ErrorCodes = {
        TransactionIdNotValid: 1,
        TransactionDoesNotExist: 2
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
export interface TransactionDTO {
    Id: string;
    WalletId?: string;
    WalletName?: string;
    BankAccountId?: string;
    BankAccountName?: string;
    Bank?: BankDTO;
    TransactionDate: string;
    OriginalTransactionDate: string;
    BookedOnDate?: string;
    AmountPlnSmallestUnit?: number;
    AmountSmallestUnit: number;
    OriginalAmountSmallestUnit: number;
    CurrencyCode: string;
    AccountBalanceAfterTransactionSmallestUnit?: number;
    Title?: string;
    OtherPartyName?: string;
    OtherPartyIban?: string;
    Kind?: string;
    Status?: TransactionStatusDTO;
    Comment?: string;
    UserAssignedTitle?: string;
    Subtransactions: SubtransactionDTO[];
    Tags: TagDTO[];
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsTransactionAttribute
 */
export interface UpdateTransactionAmount extends Command, ITransactionRelated {
    AmountSmallestUnit: number;
}
export namespace UpdateTransactionAmount {
    export const ErrorCodes = {
        TransactionIdNotValid: 1,
        TransactionDoesNotExist: 2,
        SplitTransactionsCannotBeUpdated: 3,
        AmountSignDoesNotMatch: 4
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsTransactionAttribute
 */
export interface UpdateTransactionComment extends Command, ITransactionRelated {
    Comment?: string;
}
export namespace UpdateTransactionComment {
    export const ErrorCodes = {
        TransactionIdNotValid: 1,
        TransactionDoesNotExist: 2,
        CommentTooLong: 3
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsTransactionAttribute
 */
export interface UpdateTransactionDate extends Command, ITransactionRelated {
    TransactionDate: string;
}
export namespace UpdateTransactionDate {
    export const ErrorCodes = {
        TransactionIdNotValid: 1,
        TransactionDoesNotExist: 2
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AllowUnauthorizedAttribute
 */
export interface CreateDemoSession extends Operation<string> {
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 */
export interface DismissMigrationsBanner extends Command {
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 */
export interface DismissPremiumTrialBanner extends Command {
}
export interface RegulationsDTO {
    TermsOfService: string;
    PrivacyPolicy: string;
}
/**
 * @attribute LeanCode.Contracts.Security.AllowUnauthorizedAttribute
 */
export interface RegulationsLinks extends Query<RegulationsDTO> {
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 */
export interface Settings extends Query<UserSettingsDTO> {
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 */
export interface UpdateBillingCycleStartDay extends Command {
    BillingCycleStartDay: number;
    BillingCycleEndsWithStartDay: boolean;
}
export namespace UpdateBillingCycleStartDay {
    export const ErrorCodes = {
        InvalidStartDay: 1
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
export interface UserSettingsDTO {
    BillingCycleStartDay: number;
    BillingCycleEndsWithStartDay: boolean;
    MigrationsBannerDismissed: boolean;
    PremiumTrialBannerDismissed: boolean;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 */
export interface CreateWallet extends Command {
    Name: string;
    InitialBalance: MoneyDTO;
}
export namespace CreateWallet {
    export const ErrorCodes = {
        NameRequired: 1,
        NameTooLong: 2,
        InitialBalanceRequired: 3,
        InitialBalanceCurrencyCodeRequired: 5,
        UnknownInitialBalanceCurrencyCode: 6
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsWalletAttribute
 */
export interface DeleteWallet extends Command, IWalletRelated {
}
export namespace DeleteWallet {
    export const ErrorCodes = {
        WalletIdInvalid: 1
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsWalletAttribute
 */
export interface EditWallet extends Command, IWalletRelated {
    Name: string;
}
export namespace EditWallet {
    export const ErrorCodes = {
        InvalidWalletId: 1,
        WalletDoesNotExist: 2,
        NameRequired: 3,
        NameTooLong: 4
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsWalletAttribute
 */
export interface EditWalletBalance extends Command, IWalletRelated {
    BalanceAmountSmallestUnit: number;
}
export namespace EditWalletBalance {
    export const ErrorCodes = {
        InvalidWalletId: 1,
        WalletDoesNotExist: 2
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 */
export interface MyWallets extends AdminQuery<WalletDTO> {
    /**
     * @attribute LeanCode.Contracts.Admin.AdminFilterFor
     */
    DateCreatedFilter?: AdminFilterRange<string>;
    UserId: string;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsBothWalletsAttribute
 */
export interface TransferMoneyBetweenWallets extends Command, IBothWalletsRelated {
    Name: string;
    TransactionDate: string;
    AmountSmallestUnit: number;
}
export namespace TransferMoneyBetweenWallets {
    export const ErrorCodes = {
        SourceWalletIdNotValid: 1,
        SourceWalletDoesNotExist: 2,
        TargetWalletIdNotValid: 3,
        TargetWalletDoesNotExist: 4,
        SourceAndTargetMustBeDifferent: 5,
        CurrencyMismatch: 6,
        NameRequired: 7,
        NameTooLong: 8,
        AmountIsNotPositive: 9
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
export interface WalletDTO {
    Id: string;
    /**
     * @attribute LeanCode.Contracts.Admin.AdminColumn
     */
    Name: string;
    Balance: MoneyDTO;
    /**
     * @attribute LeanCode.Contracts.Admin.AdminColumn
     * @attribute LeanCode.Contracts.Admin.AdminSortable
     */
    AmountSmallestUnit: number;
    /**
     * @attribute LeanCode.Contracts.Admin.AdminColumn
     */
    CurrencyCode: string;
    /**
     * @attribute LeanCode.Contracts.Admin.AdminColumn
     * @attribute LeanCode.Contracts.Admin.AdminSortable
     */
    DateCreated: string;
    /**
     * @attribute LeanCode.Contracts.Admin.AdminColumn
     */
    SampleEnum: SampleEnumDTO;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 */
export interface CreateWealthItem extends Command {
    Type: WealthItemTypeDTO;
    Name: string;
    Value: MoneyDTO;
}
export namespace CreateWealthItem {
    export const ErrorCodes = {
        InvalidType: 1,
        NameRequired: 2,
        NameTooLong: 3,
        ValueRequired: 4,
        ValueCurrencyCodeRequired: 5,
        UnknownValueCurrencyCode: 6,
        ValueSignWealthItemTypeMismatch: 7
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsWealthItemAttribute
 */
export interface DeleteWealthItem extends Command, IWealthItemRelated {
}
export namespace DeleteWealthItem {
    export const ErrorCodes = {
        InvalidWealthItemId: 1
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 * @attribute Kontomierz.Finances.Contracts.AuthorizeWhenOwnsWealthItemAttribute
 */
export interface EditWealthItem extends Command, IWealthItemRelated {
    Type: WealthItemTypeDTO;
    Name: string;
    Value: MoneyDTO;
}
export namespace EditWealthItem {
    export const ErrorCodes = {
        InvalidWealthItemId: 1,
        WealthItemDoesNotExist: 2,
        InvalidType: 3,
        NameRequired: 4,
        NameTooLong: 5,
        ValueRequired: 6,
        ValueCurrencyCodeRequired: 7,
        UnknownValueCurrencyCode: 8,
        ValueSignWealthItemTypeMismatch: 9
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 */
export interface MyTotalWealth extends Query<MyTotalWealthDTO> {
}
export interface MyTotalWealthDTO {
    BankAccountsPlnSmallestUnit: number;
    WalletsPlnSmallestUnit: number;
    WealthItemsPlnSmallestUnit: number;
    GrandTotalPlnSmallestUnit: number;
}
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 */
export interface MyWealthItems extends Query<MyWealthItemsDTO> {
}
export interface MyWealthItemsDTO {
    Assets: WealthItemDTO[];
    Liabilities: WealthItemDTO[];
}
export interface WealthItemDTO {
    Id: string;
    Name: string;
    Value: MoneyDTO;
    DateCreated: string;
}
export interface AuthConsts {
}
export interface InternalIdentities {
}
export namespace InternalIdentities {
    export const ServerToServerApiKeyHeader = "X-Api-Key";
}
export interface KnownClaims {
}
export namespace KnownClaims {
    export const UserId = "sub";
    export const Role = "role";
}
export interface Roles {
}
export namespace Roles {
    export const System = "system";
    export const Admin = "admin";
    export const User = "user";
    export const DemoUser = "demo_user";
}
export interface Scopes {
}
export namespace Scopes {
    export const InternalApi = "internal_api";
}
export interface BankDTO {
    Target: string;
    Name: string;
}
export interface MoneyDTO {
    AmountSmallestUnit: number;
    CurrencyCode: string;
}
export interface PaginatedQuery<TResult> extends Query<PaginatedResult<TResult>> {
    /**
     * Zero-based.
     */
    PageNumber: number;
    PageSize: number;
}
export namespace PaginatedQuery {
    export const MinPageSize = 1;
    export const MaxPageSize = 100;
}
export interface PaginatedResult<TResult> {
    Items: TResult[];
    TotalCount: number;
}
export interface SortedQuery<TResult, TSort> extends PaginatedQuery<TResult> {
    SortBy: TSort;
    SortByDescending: boolean;
}
export interface AdminFilterRange<T> {
    From?: T;
    To?: T;
}
export interface AdminQuery<TResult> extends Query<AdminQueryResult<TResult>> {
    Page: number;
    PageSize: number;
    SortOrder?: SortOrderDTO;
    SortBy?: string;
}
export interface AdminQueryResult<TResult> {
    Total: number;
    Items: TResult[];
}
export enum BankAccountImportStatusDTO {
    Completed = 0,
    InProgress = 1,
    Failed = 2
}
export enum BankAccountTypeDTO {
    Account = 0,
    CreditCard = 1
}
export enum MultipleAccessTypeDTO {
    Unknown = -1,
    Active = 0,
    Expired = 1,
    Unsupported = 2
}
export enum CategoryBudgetTypeDTO {
    Category = 0,
    CategoryGroup = 1
}
export enum CopyBudgetValidationDTO {
    Valid = 0,
    BudgetPlanAlreadyExistsForTheBillingCycle = 1,
    NoPreviousBudgetPlansExist = 2
}
export enum AfterCategoryDeletionCategorizationHandlingDTO {
    MoveToAnotherCategory = 0,
    Recategorize = 1
}
export enum CategoryGroupIconDTO {
    ShoppingBag = 0,
    Home = 1,
    Kid = 2,
    Personal = 3,
    Balance = 4,
    Gift = 5,
    Briefcase = 6,
    CircleFull = 7,
    CircleEmpty = 8,
    GamingPad = 9,
    Flag = 10,
    FaceSmile = 11,
    Key = 12,
    Star = 13,
    Atom = 14,
    ActivityHeart = 15,
    MedicalCross = 16,
    PuzzlePiece = 17,
    GraduationHat = 18,
    Plane = 19,
    Sun = 20,
    Image = 21,
    Palette = 22,
    Building = 23,
    Tag = 24,
    Anchor = 25,
    Mail = 26,
    HeartRounded = 27,
    Camera = 28,
    ShoppingCart = 29,
    File = 30,
    MusicNote = 31,
    CoinsHand = 32,
    Car = 33,
    Archive = 34,
    HelpCircle = 35
}
export enum CategoryKindDTO {
    Expense = 0,
    Income = 1
}
export enum PaginatedTransactionsSortFieldDTO {
    Date = 0,
    Amount = 1
}
export enum TransactionStatusDTO {
    Done = 0,
    Pending = 1,
    Rejected = 2,
    Scheduled = 3,
    Hold = 4
}
export enum SampleEnumDTO {
    A = 0,
    B = 1
}
export enum WealthItemTypeDTO {
    Asset = 0,
    Liability = 1
}
export enum SortOrderDTO {
    Descending = 0,
    Ascending = 1
}
export namespace Finances {
    export interface Permissions {
    }
    export namespace Permissions {
        export const SystemApiAccess = "SystemApiAccess";
        export const AdminApiAccess = "AdminApiAccess";
        export const FinancesApiAccess = "FinancesApiAccess";
        export const DebugApiAccess = "DebugApiAccess";
        export const Billtech = "Billtech";
    }
}
export default function (cqrsClient: CQRS) {
    return {
        AssignCustomBankAccountName: cqrsClient.createCommand<AssignCustomBankAccountName, AssignCustomBankAccountName.ErrorCodes>("Kontomierz.Finances.Contracts.BankAccounts.AssignCustomBankAccountName", AssignCustomBankAccountName.ErrorCodes),
        DeleteBankAccount: cqrsClient.createCommand<DeleteBankAccount, DeleteBankAccount.ErrorCodes>("Kontomierz.Finances.Contracts.BankAccounts.DeleteBankAccount", DeleteBankAccount.ErrorCodes),
        MyBankAccounts: cqrsClient.createQuery<MyBankAccounts, MyBankAccountsDTO>("Kontomierz.Finances.Contracts.BankAccounts.MyBankAccounts"),
        BudgetSummary: cqrsClient.createQuery<BudgetSummary, BudgetSummaryDTO>("Kontomierz.Finances.Contracts.Budgets.BudgetSummary"),
        CopyBudgetValidation: cqrsClient.createQuery<CopyBudgetValidation, CopyBudgetValidationDTO>("Kontomierz.Finances.Contracts.Budgets.CopyBudgetValidation"),
        CopyMostRecentBudgetPlan: cqrsClient.createCommand<CopyMostRecentBudgetPlan, CopyMostRecentBudgetPlan.ErrorCodes>("Kontomierz.Finances.Contracts.Budgets.CopyMostRecentBudgetPlan", CopyMostRecentBudgetPlan.ErrorCodes),
        DeleteCategoryBudgetPlan: cqrsClient.createCommand<DeleteCategoryBudgetPlan, DeleteCategoryBudgetPlan.ErrorCodes>("Kontomierz.Finances.Contracts.Budgets.DeleteCategoryBudgetPlan", DeleteCategoryBudgetPlan.ErrorCodes),
        MyBudgetInBillingCycle: cqrsClient.createQuery<MyBudgetInBillingCycle, BudgetDTO | null | undefined>("Kontomierz.Finances.Contracts.Budgets.MyBudgetInBillingCycle"),
        PlanCategoryBudget: cqrsClient.createCommand<PlanCategoryBudget, PlanCategoryBudget.ErrorCodes>("Kontomierz.Finances.Contracts.Budgets.PlanCategoryBudget", PlanCategoryBudget.ErrorCodes),
        PlanOtherCategoriesBudget: cqrsClient.createCommand<PlanOtherCategoriesBudget, PlanOtherCategoriesBudget.ErrorCodes>("Kontomierz.Finances.Contracts.Budgets.PlanOtherCategoriesBudget", PlanOtherCategoriesBudget.ErrorCodes),
        AddCategory: cqrsClient.createCommand<AddCategory, AddCategory.ErrorCodes>("Kontomierz.Finances.Contracts.Categories.AddCategory", AddCategory.ErrorCodes),
        AddCategoryGroup: cqrsClient.createCommand<AddCategoryGroup, AddCategoryGroup.ErrorCodes>("Kontomierz.Finances.Contracts.Categories.AddCategoryGroup", AddCategoryGroup.ErrorCodes),
        CategoryBalances: cqrsClient.createQuery<CategoryBalances, CategoryBalancesDTO>("Kontomierz.Finances.Contracts.Categories.CategoryBalances"),
        CategoryBalancesSummary: cqrsClient.createQuery<CategoryBalancesSummary, CategoryGroupBalanceSummaryDTO[]>("Kontomierz.Finances.Contracts.Categories.CategoryBalancesSummary"),
        DeleteCategory: cqrsClient.createCommand<DeleteCategory, DeleteCategory.ErrorCodes>("Kontomierz.Finances.Contracts.Categories.DeleteCategory", DeleteCategory.ErrorCodes),
        DeleteCategoryGroup: cqrsClient.createCommand<DeleteCategoryGroup, DeleteCategoryGroup.ErrorCodes>("Kontomierz.Finances.Contracts.Categories.DeleteCategoryGroup", DeleteCategoryGroup.ErrorCodes),
        EditCategoriesRelations: cqrsClient.createCommand<EditCategoriesRelations, EditCategoriesRelations.ErrorCodes>("Kontomierz.Finances.Contracts.Categories.EditCategoriesRelations", EditCategoriesRelations.ErrorCodes),
        EditCategory: cqrsClient.createCommand<EditCategory, EditCategory.ErrorCodes>("Kontomierz.Finances.Contracts.Categories.EditCategory", EditCategory.ErrorCodes),
        EditCategoryGroup: cqrsClient.createCommand<EditCategoryGroup, EditCategoryGroup.ErrorCodes>("Kontomierz.Finances.Contracts.Categories.EditCategoryGroup", EditCategoryGroup.ErrorCodes),
        MyCategories: cqrsClient.createQuery<MyCategories, MyCategoriesDTO>("Kontomierz.Finances.Contracts.Categories.MyCategories"),
        AssignCustomSubtransactionTitle: cqrsClient.createCommand<AssignCustomSubtransactionTitle, AssignCustomSubtransactionTitle.ErrorCodes>("Kontomierz.Finances.Contracts.Transactions.AssignCustomSubtransactionTitle", AssignCustomSubtransactionTitle.ErrorCodes),
        AssignCustomTransactionTitle: cqrsClient.createCommand<AssignCustomTransactionTitle, AssignCustomTransactionTitle.ErrorCodes>("Kontomierz.Finances.Contracts.Transactions.AssignCustomTransactionTitle", AssignCustomTransactionTitle.ErrorCodes),
        BalanceInBillingCycle: cqrsClient.createQuery<BalanceInBillingCycle, BalanceInBillingCycleWithComparisonDTO>("Kontomierz.Finances.Contracts.Transactions.BalanceInBillingCycle"),
        BalanceSummary: cqrsClient.createQuery<BalanceSummary, BalanceSummaryDTO>("Kontomierz.Finances.Contracts.Transactions.BalanceSummary"),
        BalancesByBillingCycles: cqrsClient.createQuery<BalancesByBillingCycles, BalanceInBillingCycleDTO[]>("Kontomierz.Finances.Contracts.Transactions.BalancesByBillingCycles"),
        BulkDeleteTransactions: cqrsClient.createCommand<BulkDeleteTransactions, BulkDeleteTransactions.ErrorCodes>("Kontomierz.Finances.Contracts.Transactions.BulkActions.BulkDeleteTransactions", BulkDeleteTransactions.ErrorCodes),
        BulkMarkAsIrrelevant: cqrsClient.createCommand<BulkMarkAsIrrelevant, BulkMarkAsIrrelevant.ErrorCodes>("Kontomierz.Finances.Contracts.Transactions.BulkActions.BulkMarkAsIrrelevant", BulkMarkAsIrrelevant.ErrorCodes),
        BulkMarkAsRelevant: cqrsClient.createCommand<BulkMarkAsRelevant, BulkMarkAsRelevant.ErrorCodes>("Kontomierz.Finances.Contracts.Transactions.BulkActions.BulkMarkAsRelevant", BulkMarkAsRelevant.ErrorCodes),
        BulkOverrideTransactionCategories: cqrsClient.createCommand<BulkOverrideTransactionCategories, BulkOverrideTransactionCategories.ErrorCodes>("Kontomierz.Finances.Contracts.Transactions.BulkActions.BulkOverrideTransactionCategories", BulkOverrideTransactionCategories.ErrorCodes),
        ConfirmTransactionCategory: cqrsClient.createCommand<ConfirmTransactionCategory, ConfirmTransactionCategory.ErrorCodes>("Kontomierz.Finances.Contracts.Transactions.ConfirmTransactionCategory", ConfirmTransactionCategory.ErrorCodes),
        CreateWalletTransaction: cqrsClient.createCommand<CreateWalletTransaction, CreateWalletTransaction.ErrorCodes>("Kontomierz.Finances.Contracts.Transactions.CreateWalletTransaction", CreateWalletTransaction.ErrorCodes),
        DeleteTransaction: cqrsClient.createCommand<DeleteTransaction, DeleteTransaction.ErrorCodes>("Kontomierz.Finances.Contracts.Transactions.DeleteTransaction", DeleteTransaction.ErrorCodes),
        EditWalletTransaction: cqrsClient.createCommand<EditWalletTransaction, EditWalletTransaction.ErrorCodes>("Kontomierz.Finances.Contracts.Transactions.EditWalletTransaction", EditWalletTransaction.ErrorCodes),
        MarkAsIrrelevant: cqrsClient.createCommand<MarkAsIrrelevant, MarkAsIrrelevant.ErrorCodes>("Kontomierz.Finances.Contracts.Transactions.MarkAsIrrelevant", MarkAsIrrelevant.ErrorCodes),
        MarkAsRelevant: cqrsClient.createCommand<MarkAsRelevant, MarkAsRelevant.ErrorCodes>("Kontomierz.Finances.Contracts.Transactions.MarkAsRelevant", MarkAsRelevant.ErrorCodes),
        OverrideTransactionCategory: cqrsClient.createCommand<OverrideTransactionCategory, OverrideTransactionCategory.ErrorCodes>("Kontomierz.Finances.Contracts.Transactions.OverrideTransactionCategory", OverrideTransactionCategory.ErrorCodes),
        PaginatedTransactions: cqrsClient.createQuery<PaginatedTransactions, PaginatedResult<TransactionDTO>>("Kontomierz.Finances.Contracts.Transactions.PaginatedTransactions"),
        SplitTransaction: cqrsClient.createCommand<SplitTransaction, SplitTransaction.ErrorCodes>("Kontomierz.Finances.Contracts.Transactions.SplitTransaction", SplitTransaction.ErrorCodes),
        MyTags: cqrsClient.createQuery<MyTags, TagDTO[]>("Kontomierz.Finances.Contracts.Transactions.Tags.MyTags"),
        TagTransaction: cqrsClient.createCommand<TagTransaction, TagTransaction.ErrorCodes>("Kontomierz.Finances.Contracts.Transactions.Tags.TagTransaction", TagTransaction.ErrorCodes),
        UpdateTransactionAmount: cqrsClient.createCommand<UpdateTransactionAmount, UpdateTransactionAmount.ErrorCodes>("Kontomierz.Finances.Contracts.Transactions.UpdateTransactionAmount", UpdateTransactionAmount.ErrorCodes),
        UpdateTransactionComment: cqrsClient.createCommand<UpdateTransactionComment, UpdateTransactionComment.ErrorCodes>("Kontomierz.Finances.Contracts.Transactions.UpdateTransactionComment", UpdateTransactionComment.ErrorCodes),
        UpdateTransactionDate: cqrsClient.createCommand<UpdateTransactionDate, UpdateTransactionDate.ErrorCodes>("Kontomierz.Finances.Contracts.Transactions.UpdateTransactionDate", UpdateTransactionDate.ErrorCodes),
        CreateDemoSession: cqrsClient.createQuery<CreateDemoSession, string>("Kontomierz.Finances.Contracts.Users.CreateDemoSession"),
        DismissMigrationsBanner: cqrsClient.createCommand<DismissMigrationsBanner, {}>("Kontomierz.Finances.Contracts.Users.DismissMigrationsBanner", {}),
        DismissPremiumTrialBanner: cqrsClient.createCommand<DismissPremiumTrialBanner, {}>("Kontomierz.Finances.Contracts.Users.DismissPremiumTrialBanner", {}),
        RegulationsLinks: cqrsClient.createQuery<RegulationsLinks, RegulationsDTO>("Kontomierz.Finances.Contracts.Users.RegulationsLinks"),
        Settings: cqrsClient.createQuery<Settings, UserSettingsDTO>("Kontomierz.Finances.Contracts.Users.Settings"),
        UpdateBillingCycleStartDay: cqrsClient.createCommand<UpdateBillingCycleStartDay, UpdateBillingCycleStartDay.ErrorCodes>("Kontomierz.Finances.Contracts.Users.UpdateBillingCycleStartDay", UpdateBillingCycleStartDay.ErrorCodes),
        CreateWallet: cqrsClient.createCommand<CreateWallet, CreateWallet.ErrorCodes>("Kontomierz.Finances.Contracts.Wallets.CreateWallet", CreateWallet.ErrorCodes),
        DeleteWallet: cqrsClient.createCommand<DeleteWallet, DeleteWallet.ErrorCodes>("Kontomierz.Finances.Contracts.Wallets.DeleteWallet", DeleteWallet.ErrorCodes),
        EditWallet: cqrsClient.createCommand<EditWallet, EditWallet.ErrorCodes>("Kontomierz.Finances.Contracts.Wallets.EditWallet", EditWallet.ErrorCodes),
        EditWalletBalance: cqrsClient.createCommand<EditWalletBalance, EditWalletBalance.ErrorCodes>("Kontomierz.Finances.Contracts.Wallets.EditWalletBalance", EditWalletBalance.ErrorCodes),
        MyWallets: cqrsClient.createQuery<MyWallets, AdminQueryResult<WalletDTO>>("Kontomierz.Finances.Contracts.Wallets.MyWallets"),
        TransferMoneyBetweenWallets: cqrsClient.createCommand<TransferMoneyBetweenWallets, TransferMoneyBetweenWallets.ErrorCodes>("Kontomierz.Finances.Contracts.Wallets.TransferMoneyBetweenWallets", TransferMoneyBetweenWallets.ErrorCodes),
        CreateWealthItem: cqrsClient.createCommand<CreateWealthItem, CreateWealthItem.ErrorCodes>("Kontomierz.Finances.Contracts.WealthItems.CreateWealthItem", CreateWealthItem.ErrorCodes),
        DeleteWealthItem: cqrsClient.createCommand<DeleteWealthItem, DeleteWealthItem.ErrorCodes>("Kontomierz.Finances.Contracts.WealthItems.DeleteWealthItem", DeleteWealthItem.ErrorCodes),
        EditWealthItem: cqrsClient.createCommand<EditWealthItem, EditWealthItem.ErrorCodes>("Kontomierz.Finances.Contracts.WealthItems.EditWealthItem", EditWealthItem.ErrorCodes),
        MyTotalWealth: cqrsClient.createQuery<MyTotalWealth, MyTotalWealthDTO>("Kontomierz.Finances.Contracts.WealthItems.MyTotalWealth"),
        MyWealthItems: cqrsClient.createQuery<MyWealthItems, MyWealthItemsDTO>("Kontomierz.Finances.Contracts.WealthItems.MyWealthItems"),
        AdminQuery: cqrsClient.createQuery<AdminQuery, AdminQueryResult<TResult>>("LeanCode.Contracts.Admin.AdminQuery")
    };
}
