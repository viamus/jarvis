var builder = DistributedApplication.CreateBuilder(args);


builder.AddNpmApp(
        name: "jarvis-dashboard",
        workingDirectory: "../../frontend/jarvis-dashboard",
        scriptName: "dev")
       .WithHttpEndpoint(env: "PORT");


builder.Build().Run();
