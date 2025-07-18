
ExampleApp.Examples.Contracts(
"ExampleApp.Examples.Contracts.AuthR
 Y
.ExampleApp.Examples.Contracts.Auth.KnownClaimsR'
%"
UserId"
sub"
Role"
roleT
(ExampleApp.Examples.Contracts.Auth.RolesR(
&"
User"
user"
Admin	"
admin^
1ExampleApp.Examples.Contracts.Booking.LocationDTOR)
'
"�Latitude
"�	Longitude�
<ExampleApp.Examples.Contracts.Booking.Management.AddTimeslotK
:LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
	"
adminj�
�
"�
"ServiceProviderId
"�Date
"�	StartTime
"�EndTime;
20
.ExampleApp.Examples.Contracts.Booking.MoneyDTOPrice 

ServiceProviderIdIsInvalid!

ServiceProviderDoesNotExist!

EndTimeMustBeAfterStartTime

PriceIsNull"
 
TimeslotOverlapsWithExisting|z
Price9ExampleApp.Examples.Contracts.Booking.MoneyDTO.ErrorCodes

ValueCannotBeNegative�N

CurrencyIsInvalid�N�
FExampleApp.Examples.Contracts.Booking.Management.CreateServiceProviderK
:LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
	"
adminj�
�
"�
"NameH
@>
<ExampleApp.Examples.Contracts.Booking.ServiceProviderTypeDTOType
"Description
"
CoverPhoto
"	Thumbnail
"AddressA
53
1ExampleApp.Examples.Contracts.Booking.LocationDTOLocation
"�Ratings

NameIsNullOrEmpty

NameIsTooLong

TypeIsNullOrInvalid

DescriptionIsNullOrEmpty

DescriptionIsTooLong

CoverPhotoIsInvalid

ThumbnailIsInvalid

AddressIsNullOrEmpty

AddressIsTooLong	

LocationIsNull
��
Location<ExampleApp.Examples.Contracts.Booking.LocationDTO.ErrorCodes

LatitudeIsOutOfRange�U

LongitudeIsOutOfRange�U�
NExampleApp.Examples.Contracts.Booking.Management.ServiceProviderLogoUploadLinkK
:LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
	"
adminb�
^
\"Z�US
QExampleApp.Examples.Contracts.Booking.Management.ServiceProviderLogoUploadLinkDTOUS
QExampleApp.Examples.Contracts.Booking.Management.ServiceProviderLogoUploadLinkDTO�
QExampleApp.Examples.Contracts.Booking.Management.ServiceProviderLogoUploadLinkDTOR6
4
"Link$
"�""RequiredHeaders�
.ExampleApp.Examples.Contracts.Booking.MoneyDTO�The DTO representing a monetary value, e.g. amount with a currency.
The amount of money, in the smallest currency unit (e.g. grosz, cent).
The (three letter) currency name, e.g. PLN, USD.R�
�U
"hValue"FThe amount of money, in the smallest currency unit (e.g. grosz, cent).B
"Currency"0The (three letter) currency name, e.g. PLN, USD.s
fExampleApp.Examples.Contracts.Booking.Reservations.Authorization.AuthorizeWhenOwnsReservationAttributeR	

"��
zExampleApp.Examples.Contracts.Booking.Reservations.Authorization.AuthorizeWhenOwnsReservationAttribute.IReservationRelatedR

"ReservationId�
{ExampleApp.Examples.Contracts.Booking.Reservations.Authorization.AuthorizeWhenOwnsReservationAttribute.IWhenOwnsReservationR
 �
DExampleApp.Examples.Contracts.Booking.Reservations.CancelReservationJ
:LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute

"
userh
fExampleApp.Examples.Contracts.Booking.Reservations.Authorization.AuthorizeWhenOwnsReservationAttributej�
�
"�
~|
zExampleApp.Examples.Contracts.Booking.Reservations.Authorization.AuthorizeWhenOwnsReservationAttribute.IReservationRelated

ReservationIdIsInvalid

ReservationDoesNotExist"
 
ReservationCannotBeCancelled�
DExampleApp.Examples.Contracts.Booking.Reservations.MyReservationByIdJ
:LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute

"
userh
fExampleApp.Examples.Contracts.Booking.Reservations.Authorization.AuthorizeWhenOwnsReservationAttributeb�
�
P"N�IE
CExampleApp.Examples.Contracts.Booking.Reservations.MyReservationDTO
~|
zExampleApp.Examples.Contracts.Booking.Reservations.Authorization.AuthorizeWhenOwnsReservationAttribute.IReservationRelatedIE
CExampleApp.Examples.Contracts.Booking.Reservations.MyReservationDTO�
LExampleApp.Examples.Contracts.Booking.Reservations.MyReservationByTimeslotIdJ
:LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute

"
userb�
f
P"N�IE
CExampleApp.Examples.Contracts.Booking.Reservations.MyReservationDTO
"
TimeslotIdIE
CExampleApp.Examples.Contracts.Booking.Reservations.MyReservationDTO�
CExampleApp.Examples.Contracts.Booking.Reservations.MyReservationDTOR�
�

"Id
"
TimeslotId
"ServiceProviderId
"ServiceProviderNameH
@>
<ExampleApp.Examples.Contracts.Booking.ServiceProviderTypeDTOType
"AddressA
53
1ExampleApp.Examples.Contracts.Booking.LocationDTOLocation
"�Date
"�	StartTime
"�EndTime;
20
.ExampleApp.Examples.Contracts.Booking.MoneyDTOPriceU
KI
GExampleApp.Examples.Contracts.Booking.Reservations.ReservationStatusDTOStatus�
AExampleApp.Examples.Contracts.Booking.Reservations.MyReservationsJ
:LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute

"
userb�
{
yw
,ExampleApp.Examples.Contracts.PaginatedQueryGE
CExampleApp.Examples.Contracts.Booking.Reservations.MyReservationDTOzx
-ExampleApp.Examples.Contracts.PaginatedResultGE
CExampleApp.Examples.Contracts.Booking.Reservations.MyReservationDTO�
VExampleApp.Examples.Contracts.Booking.Reservations.ReservationCancelledNotificationDTOR�
�
"ReservationId
"CalendarDayId
"
TimeslotId
"ServiceProviderId
"ServiceProviderName
"�Date
"�	StartTime
"�EndTime�
TExampleApp.Examples.Contracts.Booking.Reservations.ReservationCreatedNotificationDTOR�
�
"ReservationId
"CalendarDayId
"
TimeslotId
"ServiceProviderId
"ServiceProviderName
"�Date
"�	StartTime
"�EndTime�
GExampleApp.Examples.Contracts.Booking.Reservations.ReservationStatusDTOZP
	
Pending

	Confirmed

Rejected

Paid

	Cancelled

	Completed�
BExampleApp.Examples.Contracts.Booking.Reservations.ReserveTimeslotJ
:LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute

"
userj�
2
"�
"CalendarDayId
"
TimeslotId

TimeslotIdInvalid

TimeslotCannotBeReserved

CalendarDayIdInvalid

CalendarDayDoesNotExist�
JExampleApp.Examples.Contracts.Booking.ServiceProviders.AllServiceProvidersJ
:LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute

"
userb�
�
��
)ExampleApp.Examples.Contracts.SortedQueryTR
PExampleApp.Examples.Contracts.Booking.ServiceProviders.ServiceProviderSummaryDTOWU
SExampleApp.Examples.Contracts.Booking.ServiceProviders.ServiceProviderSortFieldsDTO
"
NameFilterP
B>
<ExampleApp.Examples.Contracts.Booking.ServiceProviderTypeDTO
TypeFilter
"PromotedOnly��
-ExampleApp.Examples.Contracts.PaginatedResultTR
PExampleApp.Examples.Contracts.Booking.ServiceProviders.ServiceProviderSummaryDTO�
MExampleApp.Examples.Contracts.Booking.ServiceProviders.ServiceProviderDetails�The query will return details about service provider and all available timeslots from
to
    +X days (configurable on query level).J
:LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute

"
userb�
�
]"[�VR
PExampleApp.Examples.Contracts.Booking.ServiceProviders.ServiceProviderDetailsDTO
"ServiceProviderId
"�CalendarDateVR
PExampleApp.Examples.Contracts.Booking.ServiceProviders.ServiceProviderDetailsDTO�
PExampleApp.Examples.Contracts.Booking.ServiceProviders.ServiceProviderDetailsDTOR�
�

"Id
"Name
"DescriptionH
@>
<ExampleApp.Examples.Contracts.Booking.ServiceProviderTypeDTOType
"AddressA
53
1ExampleApp.Examples.Contracts.Booking.LocationDTOLocation
"IsPromotionActive
"�Ratings
"
CoverPhoto
"	ThumbnailZ
M"K�FD
BExampleApp.Examples.Contracts.Booking.ServiceProviders.TimeslotDTO	Timeslotsv
SExampleApp.Examples.Contracts.Booking.ServiceProviders.ServiceProviderSortFieldsDTOZ

Name

Type

Ratings�
PExampleApp.Examples.Contracts.Booking.ServiceProviders.ServiceProviderSummaryDTOR�
�

"Id
"NameH
@>
<ExampleApp.Examples.Contracts.Booking.ServiceProviderTypeDTOType
"	Thumbnail
"IsPromotionActive
"AddressA
53
1ExampleApp.Examples.Contracts.Booking.LocationDTOLocation
"�Ratings�
BExampleApp.Examples.Contracts.Booking.ServiceProviders.TimeslotDTOR�
�

"Id
"CalendarDayId
"�	StartTime
"�EndTime;
20
.ExampleApp.Examples.Contracts.Booking.MoneyDTOPrice
"
IsReservedl
<ExampleApp.Examples.Contracts.Booking.ServiceProviderTypeDTOZ,

Hairdresser


BarberShop

Groomer�
@ExampleApp.Examples.Contracts.Dashboards.AssignmentEmployerEmbedK
:LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
	"
adminb

"	�""�
8ExampleApp.Examples.Contracts.Employees.AdminEmployeeDTOR|
z

"Idl
"Name4
$LeanCode.Contracts.Admin.AdminColumn

"
Name(
&LeanCode.Contracts.Admin.AdminSortable�
4ExampleApp.Examples.Contracts.Employees.AllEmployeesK
:LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
	"
adminb�
G
E"C�>"<�75
3ExampleApp.Examples.Contracts.Employees.EmployeeDTO>"<�75
3ExampleApp.Examples.Contracts.Employees.EmployeeDTO�
9ExampleApp.Examples.Contracts.Employees.AllEmployeesAdminK
:LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
	"
adminb�
�
ec
#LeanCode.Contracts.Admin.AdminQuery<:
8ExampleApp.Examples.Contracts.Employees.AdminEmployeeDTOM
"
NameFilter7
'LeanCode.Contracts.Admin.AdminFilterFor

"
Nameki
)LeanCode.Contracts.Admin.AdminQueryResult<:
8ExampleApp.Examples.Contracts.Employees.AdminEmployeeDTO�
6ExampleApp.Examples.Contracts.Employees.CreateEmployeeK
:LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
	"
adminj~
$
"�
"Name
"Email

NameCannotBeEmpty

NameTooLong

EmailInvalid

EmailIsNotUniqueb
3ExampleApp.Examples.Contracts.Employees.EmployeeDTOR+
)

"Id
"Name
"Email�
=ExampleApp.Examples.Contracts.Firebase.SendCustomNotificationJ
:LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute

"
userja
,
"�
"Content
"ImageUrl

ContentCannotBeEmpty

ImageUrlInvalid�
:ExampleApp.Examples.Contracts.Identities.KratosIdentityDTORW
U

"Id
"�	CreatedAt
"�	UpdatedAt
"SchemaId
"Email�
9ExampleApp.Examples.Contracts.Identities.SearchIdentitiesK
:LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
	"
adminb�
�
pn
,ExampleApp.Examples.Contracts.PaginatedQuery><
:ExampleApp.Examples.Contracts.Identities.KratosIdentityDTO
"SchemaId
"EmailPattern
"GivenNamePattern
"FamilyNamePatternqo
-ExampleApp.Examples.Contracts.PaginatedResult><
:ExampleApp.Examples.Contracts.Identities.KratosIdentityDTO�
,ExampleApp.Examples.Contracts.PaginatedQueryR�
�
E"C�><
-ExampleApp.Examples.Contracts.PaginatedResult	
TResult	
TResult
"h
PageNumber"Zero-based.
"hPageSize"
MinPageSize"
MaxPageSizedo
-ExampleApp.Examples.Contracts.PaginatedResultR>
<	
TResult
"�	
TResultItems
"h
TotalCount�
>ExampleApp.Examples.Contracts.Projects.AddAssignmentsToProject8
6LeanCode.Contracts.Security.AllowUnauthorizedAttributej�
o
"�
"	ProjectIdS
D"B�=;
9ExampleApp.Examples.Contracts.Projects.AssignmentWriteDTOAssignments

ProjectIdNotValid

ProjectDoesNotExist

AssignmentsCannotBeNull

AssignmentsCannotBeEmpty�
6ExampleApp.Examples.Contracts.Projects.AdminProjectDTOR|
z

"Idl
"Name4
$LeanCode.Contracts.Admin.AdminColumn

"
Name(
&LeanCode.Contracts.Admin.AdminSortable�
2ExampleApp.Examples.Contracts.Projects.AllProjects8
6LeanCode.Contracts.Security.AllowUnauthorizedAttributeb�
c
C"A�<":�53
1ExampleApp.Examples.Contracts.Projects.ProjectDTO
"SortByNameDescending<":�53
1ExampleApp.Examples.Contracts.Projects.ProjectDTO�
7ExampleApp.Examples.Contracts.Projects.AllProjectsAdminK
:LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
	"
adminb�
�
ca
#LeanCode.Contracts.Admin.AdminQuery:8
6ExampleApp.Examples.Contracts.Projects.AdminProjectDTOM
"
NameFilter7
'LeanCode.Contracts.Admin.AdminFilterFor

"
Nameig
)LeanCode.Contracts.Admin.AdminQueryResult:8
6ExampleApp.Examples.Contracts.Projects.AdminProjectDTO�
AExampleApp.Examples.Contracts.Projects.AssignEmployeeToAssignmentK
:LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
	"
adminj�
1
"�
"AssignmentId
"
EmployeeId

AssignmentIdNotValid'
%
!ProjectWithAssignmentDoesNotExist

EmployeeIdNotValid

EmployeeDoesNotExist�
4ExampleApp.Examples.Contracts.Projects.AssignmentDTORk
i
=;
9ExampleApp.Examples.Contracts.Projects.AssignmentWriteDTO

"Id
"AssignedEmployeeIdM
9ExampleApp.Examples.Contracts.Projects.AssignmentWriteDTOR

"Name�
4ExampleApp.Examples.Contracts.Projects.CreateProject8
6LeanCode.Contracts.Security.AllowUnauthorizedAttributejC

"�
"Name

NameCannotBeEmpty

NameTooLongv
FExampleApp.Examples.Contracts.Projects.EmployeeAssignedToAssignmentDTOR,
*
"AssignmentId
"
EmployeeId|
MExampleApp.Examples.Contracts.Projects.EmployeeAssignedToProjectAssignmentDTOR+
)
"	ProjectId
"AssignmentId�
?ExampleApp.Examples.Contracts.Projects.EmployeeAssignmentsTopic8
6LeanCode.Contracts.Security.AllowUnauthorizedAttributez�

"�
"
EmployeeId�
QO
MExampleApp.Examples.Contracts.Projects.EmployeeAssignedToProjectAssignmentDTOMExampleApp.Examples.Contracts.Projects.EmployeeAssignedToProjectAssignmentDTO�
US
QExampleApp.Examples.Contracts.Projects.EmployeeUnassignedFromProjectAssignmentDTOQExampleApp.Examples.Contracts.Projects.EmployeeUnassignedFromProjectAssignmentDTOf
JExampleApp.Examples.Contracts.Projects.EmployeeUnassignedFromAssignmentDTOR

"AssignmentId�
QExampleApp.Examples.Contracts.Projects.EmployeeUnassignedFromProjectAssignmentDTOR+
)
"	ProjectId
"AssignmentId�
5ExampleApp.Examples.Contracts.Projects.ProjectDetails8
6LeanCode.Contracts.Security.AllowUnauthorizedAttributeb�
S
E"C�>:
8ExampleApp.Examples.Contracts.Projects.ProjectDetailsDTO

"Id>:
8ExampleApp.Examples.Contracts.Projects.ProjectDetailsDTO�
8ExampleApp.Examples.Contracts.Projects.ProjectDetailsDTOR�
�
53
1ExampleApp.Examples.Contracts.Projects.ProjectDTON
?"=�86
4ExampleApp.Examples.Contracts.Projects.AssignmentDTOAssignmentsQ
1ExampleApp.Examples.Contracts.Projects.ProjectDTOR


"Id
"Name�
GExampleApp.Examples.Contracts.Projects.ProjectEmployeesAssignmentsTopicK
:LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
	"
adminz�

"�
"	ProjectId�
JH
FExampleApp.Examples.Contracts.Projects.EmployeeAssignedToAssignmentDTOFExampleApp.Examples.Contracts.Projects.EmployeeAssignedToAssignmentDTO�
NL
JExampleApp.Examples.Contracts.Projects.EmployeeUnassignedFromAssignmentDTOJExampleApp.Examples.Contracts.Projects.EmployeeUnassignedFromAssignmentDTO�
EExampleApp.Examples.Contracts.Projects.UnassignEmployeeFromAssignmentK
:LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
	"
adminjd

"�
"AssignmentId

AssignmentIdNotValid'
%
!ProjectWithAssignmentDoesNotExist�
)ExampleApp.Examples.Contracts.SortedQueryR�
�
=;
,ExampleApp.Examples.Contracts.PaginatedQuery	
TResult	
TResult
TSort
	
TSortSortBy
"SortByDescending�
4ExampleApp.Examples.Contracts.Users.DeleteOwnAccountJ
:LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute

"
userj	

"�F
(LeanCode.AppRating.Contracts.PermissionsR
"
RateApp"	
RateApp@
(LeanCode.AppRating.Contracts.PlatformDTOZ
	
Android

IOS�
.LeanCode.AppRating.Contracts.RatingAlreadySentM
:LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
"	
RateAppb

"	�""�
,LeanCode.AppRating.Contracts.SubmitAppRatingM
:LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
"	
RateAppj�
�
"�
"�Rating
"AdditionalComment8
,*
(LeanCode.AppRating.Contracts.PlatformDTOPlatform
"SystemVersion
"
AppVersion
"�"" Metadata

RatingInvalid

AdditionalCommentTooLong

PlatformInvalid

SystemVersionRequired

SystemVersionTooLong

AppVersionRequired

AppVersionTooLong1
$LeanCode.Contracts.Admin.AdminColumnR	

"�4
'LeanCode.Contracts.Admin.AdminFilterForR	

"�T
)LeanCode.Contracts.Admin.AdminFilterRangeR'
%
T

TFrom

TTo0
#LeanCode.Contracts.Admin.AdminLabelR	

"��
#LeanCode.Contracts.Admin.AdminQueryR�
�
A"?�:8
)LeanCode.Contracts.Admin.AdminQueryResult	
TResult	
TResult
"hPage"0-based
"hPageSize
"SortDescending
"SortByf
)LeanCode.Contracts.Admin.AdminQueryResultR9
7	
TResult
"jTotal
"�	
TResultItems3
&LeanCode.Contracts.Admin.AdminSortableR	

"�B
*LeanCode.ForceUpdate.Contracts.PlatformDTOZ
	
Android

IOS�
-LeanCode.ForceUpdate.Contracts.VersionSupportb�
�
;"9�42
0LeanCode.ForceUpdate.Contracts.VersionSupportDTO:
.,
*LeanCode.ForceUpdate.Contracts.PlatformDTOPlatform
"Version42
0LeanCode.ForceUpdate.Contracts.VersionSupportDTO�
0LeanCode.ForceUpdate.Contracts.VersionSupportDTOR�
�!
"CurrentlySupportedVersion
"MinimumRequiredVersionD
:8
6LeanCode.ForceUpdate.Contracts.VersionSupportResultDTOResulto
6LeanCode.ForceUpdate.Contracts.VersionSupportResultDTOZ5

UpdateRequired

UpdateSuggested

UpToDatez
Price9ExampleApp.Examples.Contracts.Booking.MoneyDTO.ErrorCodes

ValueCannotBeNegative�N

CurrencyIsInvalid�N�
Location<ExampleApp.Examples.Contracts.Booking.LocationDTO.ErrorCodes

LatitudeIsOutOfRange�U

LongitudeIsOutOfRange�U"
1datetime