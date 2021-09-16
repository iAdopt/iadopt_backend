/* Centers */

INSERT INTO centers (id, name, email, phone, address, password)
VALUES ('04279cb8-312a-488a-a14b-fbe44165af77', 'Catlike Centre', 'example1@email.com', '+34 999 99 99 99', 'Dirección de Ejemplo, 1 Casa', '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824');

INSERT INTO centers (id, name, email, phone, address, password)
VALUES ('378211fd-344f-44ad-ba71-bf58bf957a67', 'Doglike Centre', 'example2@email.com', '+34 999 99 99 99', 'Dirección de Ejemplo, 2 Casa', 'b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9');

INSERT INTO centers (id, name, email, phone, address, password)
VALUES ('45398a6b-6582-4bbc-abda-84f97a8b1a15', 'Amazing Centre', 'example3@email.com', '+34 999 99 99 99', 'Dirección de Ejemplo, 3 Casa', '47ebf385118a877d3bb15bdbb4877635dd7070f1afce8c1bc2565a1e704fda95');

INSERT INTO centers (id, name, email, phone, address, password)
VALUES ('0c266122-e95f-4a7c-88b6-5794c281896a', 'Fullstack Centre', 'example4@email.com', '+34 999 99 99 99', 'Dirección de Ejemplo, 4 Casa', '64380ad4b7d8c813c127516833423e494ec25a836260c94948229bc06c7c5cfc');

/* Animals */

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, center)
VALUES ('67279080-ed54-4388-955b-bcac6a944bac', 'Silhouette', 'dog', '2018-06-18', 'male', 'new', 2, 'Lorem ipsum...', '04279cb8-312a-488a-a14b-fbe44165af77');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, center)
VALUES ('82457f55-dfcf-47c1-baad-27b384e5267f', 'Stripes', 'cat', '2019-12-19', 'male', 'new', 10, 'Lorem ipsum...', '378211fd-344f-44ad-ba71-bf58bf957a67');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, center)
VALUES ('97f0b852-1a87-499d-99a6-4d4ef87a45f3', 'Scratchy', 'dog', '2020-02-20', 'male', 'new', 2, 'Lorem ipsum...', '04279cb8-312a-488a-a14b-fbe44165af77');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, center)
VALUES ('bce50bc3-f226-4192-b2da-d57f415d2c68', 'Shorty', 'cat', '2015-06-15', 'male', 'new', 40, 'Lorem ipsum...', '378211fd-344f-44ad-ba71-bf58bf957a67');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, tags, center)
VALUES ('2bcca779-f3e8-40ea-8f2d-f9c4bfbf76c9','Scarlett', 'dog', '2014-10-14', 'female', 'new', 24, 'Lorem ipsum...', ARRAY ['docil', 'cariñoso', 'bueno'], '378211fd-344f-44ad-ba71-bf58bf957a67');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, tags, center)
VALUES ('bcf95a9d-89bb-4717-8bb8-e911dc3485e0', 'Winnie', 'cat', '2020-02-20', 'female', 'new', 2, 'Lorem ipsum...', null, '45398a6b-6582-4bbc-abda-84f97a8b1a15');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, center)
VALUES ('99ab7f1a-2b2c-451c-a6d1-5a3835222c71', 'Decopatch', 'dog', '2010-08-25', 'female', 'new', 3, 'Lorem ipsum...', '0c266122-e95f-4a7c-88b6-5794c281896a');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, tags, center)
VALUES ('77844cae-7ac7-4bea-8f36-fccbeed351a8', 'Dot', 'cat', '2017-02-20', 'female', 'new', 2, 'Lorem ipsum...', ARRAY ['le gusta jugar'], '0c266122-e95f-4a7c-88b6-5794c281896a');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, center)
VALUES ('efa4c527-048d-492c-9d9b-2a5b7ffe6645', 'Olive', 'dog', '2012-02-08', 'male', 'urgent', 20, 'Lorem ipsum...', '04279cb8-312a-488a-a14b-fbe44165af77');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, tags, center)
VALUES ('80111f08-975f-4d55-9932-0517da0b7872', 'Ash', 'cat', '2020-02-20', 'male', 'urgent', 2, 'Lorem ipsum...', ARRAY ['agil'], '45398a6b-6582-4bbc-abda-84f97a8b1a15');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, center)
VALUES ('a02f3dbb-4372-499b-ac78-917486e6dd33', 'Panther', 'dog', '2018-04-23', 'male', 'urgent', 20, 'Lorem ipsum...', '45398a6b-6582-4bbc-abda-84f97a8b1a15');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, center)
VALUES ('b15bfe36-b2ed-42f9-8f8c-1d5d0379b101', 'Charlie', 'cat', '2017-02-20', 'male', 'urgent', 7, 'Lorem ipsum...', '04279cb8-312a-488a-a14b-fbe44165af77');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, center)
VALUES ('0064a138-9f99-4399-a799-4f904e0016a8', 'Blackie', 'dog', '2009-12-15', 'female', 'urgent', 20, 'Lorem ipsum...', '378211fd-344f-44ad-ba71-bf58bf957a67');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, center)
VALUES ('67a4a166-07d3-442a-91d6-a0eae6a96a6f', 'Blanco', 'cat', '2021-02-20', 'female', 'urgent', 9, 'Lorem ipsum...', '04279cb8-312a-488a-a14b-fbe44165af77');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, center)
VALUES ('b35dabe7-1d7f-4d9b-83ec-0046e1ea9320', 'Domino', 'cat', '2016-05-20', 'female', 'urgent', 20, 'Lorem ipsum...', '04279cb8-312a-488a-a14b-fbe44165af77');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, center)
VALUES ('6135e303-2b2c-4140-abfd-a4a6dfda3459', 'Oreo', 'cat', '2014-11-23', 'female', 'urgent', 15, 'Lorem ipsum...', '0c266122-e95f-4a7c-88b6-5794c281896a');
