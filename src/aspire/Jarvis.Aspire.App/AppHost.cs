var builder = DistributedApplication.CreateBuilder(args);

var keycloak = builder.AddKeycloak("keycloak")
                      .WithDataVolume();


builder.AddNpmApp(
        name: "jarvis-dashboard",
        workingDirectory: "../../frontend/jarvis-dashboard",
        scriptName: "dev")
       .WithHttpEndpoint(port: 5173, env: "PORT")
       .WithReference(keycloak);


builder.Build().Run();
