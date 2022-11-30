using LeanCode.Contracts;

public class Operation : IOperation<int> {
    public string Arg { get; set; }
}

public class OperationWithNullableResult : IOperation<int?> {
    public string Arg { get; set; }
}
