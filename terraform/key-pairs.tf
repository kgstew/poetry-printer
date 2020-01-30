resource "aws_key_pair" "poetry-printer-key" {
  key_name   = "poetry-printer-key"
  public_key = file("./poetry_printer.pem")
}
