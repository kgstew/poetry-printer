resource "aws_s3_bucket" "deploy-bucket" {
  bucket = "poetry-printer-${var.app-name}-deployment"
}
