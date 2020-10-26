namespace Sweepi.ImageServiceAPI.Models
{
  public interface IImageDatabaseSettings
  {
    string ImagesCollectionName { get; set; }
    string ConnectionString { get; set; }
    string DatabaseName { get; set; }
  }
}